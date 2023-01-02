const { comment_user } = require("../../controller/home/homeCommentController");
const { auth_user } = require("../../middleware/authMiddleware");

const router = require("express").Router();
router.post("/user-comment", auth_user, comment_user);

module.exports = router;
