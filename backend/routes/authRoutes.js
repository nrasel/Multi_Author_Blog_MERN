const router = require("express").Router();
const {
  admin_login,
  user_register,
  verify_email,
} = require("../controller/authController");

router.post("/admin-login", admin_login);
router.post("/register", user_register);
router.post("/verify-email", verify_email);

module.exports = router;
