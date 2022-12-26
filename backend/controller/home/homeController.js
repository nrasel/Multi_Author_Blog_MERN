const articleModel = require("../../models/articleModel");

module.exports.home_article_get = async (req, res) => {
  console.log(req.query);
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
