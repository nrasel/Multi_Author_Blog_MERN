const router = require("express").Router();
const { admin_login, user_register } = require("../controller/authController");

router.post("/admin-login", admin_login);
router.post("/register", user_register);

module.exports = router;
