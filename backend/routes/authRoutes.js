const router = require("express").Router();
const {
  admin_login,
  user_register,
  verify_email,
  login_user,
} = require("../controller/authController");

router.post("/admin-login", admin_login);
router.post("/register", user_register);
router.post("/verify-email", verify_email);
router.post("/user-login", login_user);

module.exports = router;
