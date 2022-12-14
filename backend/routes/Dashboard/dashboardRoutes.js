const router = require("express").Router();
const {
  category_add,
  category_get,
  category_delete,
  category_edit,
  category_update,
} = require("../../controller/Dashboard/categoryControler");
//মিডিল ওয়ার এর কারনে এডমিন লগিন না করে কোন ক্যাটগরি এড করতে পারবে না। তাই মিডিল ওয়ারটা ইউজ করা যায়। মিডিল ওয়ার মূলত ক্লাইয়েন্ট এবং সার্ভারের মাঝে থেকে ক্লায়েন্ট কে তার রিকুয়েস্ট অনুযায় রেস্পন্স করবে।
const { admin_middleware } = require("../../middleware/authMiddleware");

router.post("/add-category", admin_middleware, category_add);
router.get("/get-category", admin_middleware, category_get);
router.delete(
  "/delete-category/:categoryId",
  admin_middleware,
  category_delete
);
router.get("/edit-category/:categorySlug", admin_middleware, category_edit);
router.patch("/update-category/:categoryId", admin_middleware, category_update);

module.exports = router;
