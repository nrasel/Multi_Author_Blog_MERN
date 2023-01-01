const articleModel = require("../../models/articleModel");

module.exports.home_article_get = async (req, res) => {
  let { currentPage, searchValue } = req.query;
  currentPage = parseInt(currentPage);

  const perPage = 4;
  const skipPage = parseInt(currentPage - 1) * perPage;

  let articles = [];

  try {
    const countArticle = await articleModel.find({}).countDocuments();
    if (searchValue === "undefined" || !searchValue) {
      articles = await articleModel
        .find({})
        .skip(skipPage)
        .sort({ createAt: -1 });

      res.status(200).json({
        articles,
        perPage,
        countArticle,
      });
    } else {
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: { error: "Internal Server Error" },
    });
  }
};

module.exports.home_tag_category_get = async (req, res) => {
  try {
    // এইখানে মংগোজ এর বিল্ট ইন ফাংশন দিয়ে কুয়েরি করা হইছে আমাদের যতগুলা আর্টিকেল আছে তার মধ্যে থেকে কারন আমাদের কাউন্ট করতে হবে একটা ট্যাগ বা ক্যাটেগরির আন্ডারে কতোগুলা আর্টিকেল আছে ।
    const getCategory = await articleModel.aggregate([
      {
        $match: {
          category: {
            $not: {
              $size: 0,
            },
          },
        },
      },
      {
        $unwind: "$category",
      },
      {
        $group: {
          _id: "$category",
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    // এখানে সেম নামে ট্যাগ গুলা থেকে একটা ইউনিক ট্যাগ নিবো সেই জন্য মংগোজ এর বিল্ট ইন কুয়েরি ইউজ করছি
    const getTag = await articleModel.distinct("tag");
    return res.status(200).json({
      allCategory: getCategory,
      allTag: getTag,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: {
        error: "Internal Server Error",
      },
    });
  }
};

module.exports.old_recent_article_get = async (req, res) => {
  try {
    // olda article get
    const oldArticle = await articleModel.aggregate([
      {
        // কোন কিছু ম্যাচ করাতে হবে না তাই এইটা এম্পটি
        $match: {},
      },
      {
        // কইটা দেখাবো সেই জন্য স্যাম্পল নেওয়া
        $sample: {
          size: 3,
        },
      },
    ]);

    const recentArticle = await articleModel
      .find({})
      .limit(3)
      .sort({ createdAt: -1 });
    return res.status(200).json({
      oldArticle,
      recentArticle,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: {
        error: "Internal Server Error",
      },
    });
  }
};

module.exports.home_category_get = async (req, res) => {
  const { currentPage, categorySlug } = req.query;
  const perPage = 2;
  const skipPage = parseInt(currentPage - 1) * perPage;

  try {
    const countArticle = await articleModel
      .find({ category_slug: categorySlug })
      .countDocuments();
    const articles = await articleModel
      .find({ category_slug: categorySlug })
      .skip(skipPage)
      .limit(perPage)
      .sort({ createAt: -1 });

    return res.status(200).json({
      categoryArticle: articles,
      perPage,
      countCatArticle: countArticle,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: {
        error: "Internal Server Error",
      },
    });
  }
};

module.exports.home_tag_get = async (req, res) => {
  const { tagSlug, currentPage } = req.query;
  const perPage = 2;
  const skipPage = parseInt(currentPage - 1) * perPage;
  try {
    const countTagArticle = await articleModel
      .find({ tag_slug: tagSlug })
      .countDocuments();
    const articles = await articleModel
      .find({ tag_slug: tagSlug })
      .skip(skipPage)
      .limit(perPage)
      .sort({ createAt: -1 });

    return res.status(200).json({
      tagArticle: articles,
      perPage,
      countTagArticle: countTagArticle,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: {
        error: "Internal Server Error",
      },
    });
  }
};

module.exports.details_artcle = async (req, res) => {
  const { articleSlug } = req.params;

  try {
    const readArticle = await articleModel.findOne({ slug: articleSlug });
    const relatedArticle = await articleModel.aggregate([
      {
        $match: {
          $and: [
            {
              category_slug: {
                $eq: readArticle.category_slug,
              },
            },
            {
              slug: {
                $ne: articleSlug,
              },
            },
          ],
        },
      },
      {
        $sample: {
          size: 3,
        },
      },
    ]);
    const readMoreArticle = await articleModel.aggregate([
      {
        $match: {
          $and: [
            {
              category_slug: {
                $eq: readArticle.category_slug,
              },
            },
            {
              slug: {
                $ne: articleSlug,
              },
            },
          ],
        },
      },
      {
        $sample: {
          size: 1,
        },
      },
    ]);
    const moreTag = await articleModel.distinct("tag_slug", {
      tag_slug: {
        $ne: readArticle.tag_slug,
      },
    });

    return res.status(200).json({
      readArticle,
      relatedArticle,
      readMoreArticle: {
        title: readMoreArticle.length > 0 ? readMoreArticle[0].title : "",
        slug: readMoreArticle.length > 0 ? readMoreArticle[0].slug : "",
      },
      moreTag,
    });
  } catch (error) {
    return res.status(500).json({
      errorMessage: {
        error: "Internal Server Error",
      },
    });
  }
};

module.exports.dislike_like_get = async (req, res) => {
  const { articleSlug } = req.params;
  // এখানে লগিন ইউজার লাইক করল নাকি লগিন না করা ইউজার লাইক করল সেইটা বুঝার জন্য একটা মিডিল ওয়ার তৈরি করে হয়েছে
  const { userId, userName, role } = req;

  try {
    // eita diye mulot article details theke jeigula lagbe seita nibo
    const getArt = await articleModel
      .findOne({ slug: articleSlug })
      .select({ like: 1, dislike: 1, like_dislike: 1 });

    const check_user = getArt.like_dislike.find(
      (u) => u.like_disliker_id === userId
    );

    if (check_user) {
      if (check_user.like_or_dislike === "like") {
        res.status(200).json({
          like_status: "like",
          dislike_status: "",
          like: getArt.like,
          dislike: getArt.dislike,
        });
      } else {
        res.status(200).json({
          like_status: "",
          dislike_status: "dislike",
          like: getArt.like,
          dislike: getArt.dislike,
        });
      }
    } else {
      res.status(200).json({
        like_status: "",
        dislike_status: "",
        like: getArt.like,
        dislike: getArt.dislike,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.article_like_dislike = async (req, res) => {
  const { articleId, like_status, dislike_status } = req.body;
  console.log(req.role);
  const { userName, userId } = req;
  try {
    const { like, slug, dislike } = await articleModel.findOne({
      _id: articleId,
    });
    if (!like_status && !dislike_status) {
      await articleModel.updateOne(
        {
          _id: articleId,
        },
        {
          like: like + 1,
          $push: {
            like_dislike: {
              like_or_dislike: "like",
              like_disliker_id: userId,
            },
          },
        }
      );
      res.status(200).json({ successMessage: "you like this article" });
    } else if (like_status && !dislike_status) {
      await articleModel.updateOne(
        { _id: articleId },
        {
          like: like - 1,
          $pull: {
            like_dislike: {
              like_disliker_id: userId,
            },
          },
        }
      );
      res.status(200).json({ successMessage: "undo like" });
    } else if (!like_status && dislike_status) {
      await articleModel.updateOne(
        {
          _id: articleId,
          "like_dislike.like_disliker_id": userId,
        },
        {
          like: like + 1,
          dislike: dislike - 1,
          $set: {
            "like_dislike.$.like_or_dislike": "like",
          },
        }
      );
      res.status(200).json({ errorMessage: "You like this article" });
    }
    console.log(like);
  } catch (error) {}
};
