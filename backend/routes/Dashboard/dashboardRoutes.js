const router = require("express").Router();
const {
  category_add,
} = require("../../controller/Dashboard/categoryControler");
//মিডিল ওয়ার এর কারনে এডমিন লগিন না করে কোন ক্যাটগরি এড করতে পারবে না। তাই মিডিল ওয়ারটা ইউজ করা যায়। মিডিল ওয়ার মূলত ক্লাইয়েন্ট এবং সার্ভারের মাঝে থেকে ক্লায়েন্ট কে তার রিকুয়েস্ট অনুযায় রেস্পন্স করবে।
const { admin_middleware } = require("../../middleware/authMiddleware");

router.post("/add-category", admin_middleware, category_add);

module.exports = router;
