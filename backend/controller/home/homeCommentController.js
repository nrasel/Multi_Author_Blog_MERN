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
