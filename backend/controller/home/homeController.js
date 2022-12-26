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
    console.log(getCategory);
    // এখানে সেম নামে ট্যাগ গুলা থেকে একটা ইউনিক ট্যাগ নিবো সেই জন্য মংগোজ এর বিল্ট ইন কুয়েরি ইউজ করছি
    const getTag = await articleModel.distinct("tag");
    return res.status(200).json({
      allCategory: getCategory,
      allTag: getTag,
    });
  } catch (error) {
    return res.status(200).json({
      errorMessage: {
        error: "Internal Server Error",
      },
    });
  }
};
