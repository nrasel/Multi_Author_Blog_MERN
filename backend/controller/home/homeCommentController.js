module.exports.comment_user = async (req, res) => {
  console.log(req.body);
  const { articleId, articleSlug, articleTitle, userName, userImage, comment } =
    req.body;
};
