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
