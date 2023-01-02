const commentModel = require("../../models/commentModel");

module.exports.comment_user = async (req, res) => {
  const { articleId, articleSlug, articleTitle, userName, userImage, comment } =
    req.body;
  try {
    await commentModel.create({
      articleId,
      comment,
      userName,
      userImage,
    });
    res.status(201).json({ successMessage: "Comment You" });
  } catch (error) {
    res.status(500).json({
      errorMessage: { error: "Internal Server error" },
    });
  }
};

module.exports.comment_get = async (req, res) => {
  const { articleId } = req.params;
  try {
    const getComment = await commentModel.find({ articleId });
    res.status(200).json({
      comment: getComment,
    });
  } catch (error) {
    console.log(error);
  }
};
