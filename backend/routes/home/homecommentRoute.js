const {
  comment_user,
  comment_get,
} = require("../../controller/home/homeCommentController");
const { auth_user } = require("../../middleware/authMiddleware");

const router = require("express").Router();
router.post("/user-comment", auth_user, comment_user);
router.get("/user-comments/:articleId", comment_get);

module.exports = router;
