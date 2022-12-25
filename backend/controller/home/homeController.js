module.exports.home_article_get = (req, res) => {
  console.log(req.query);
  let { currentPage, searchValue } = req.query;
  currentPage = parseInt(currentPage);

  const perPage = 4;
  const skipPage = parseInt(currentPage - 1) * perPage;


  
};
