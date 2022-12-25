const router = require("express").Router();
// import category controller
const {
  category_add,
  category_get,
  category_delete,
  category_edit,
  category_update,
} = require("../../controller/Dashboard/categoryControler");
const {
  get_tag_category,
  article_add,
  article_get,
  article_edit,
  article_update,
} = require("../../controller/Dashboard/tagCategoryController");

// import tag controller
const {
  tag_add,
  tag_get,
  tag_delete,
  tag_eidt,
  tag_update,
} = require("../../controller/Dashboard/tagController");

//মিডিল ওয়ার এর কারনে এডমিন লগিন না করে কোন ক্যাটগরি এড করতে পারবে না। তাই মিডিল ওয়ারটা ইউজ করা যায়। মিডিল ওয়ার মূলত ক্লাইয়েন্ট এবং সার্ভারের মাঝে থেকে ক্লায়েন্ট কে তার রিকুয়েস্ট অনুযায় রেস্পন্স করবে।
const { admin_middleware } = require("../../middleware/authMiddleware");

// for category route
router.post("/add-category", admin_middleware, category_add);
router.get("/get-category", admin_middleware, category_get);
router.delete(
  "/delete-category/:categoryId",
  admin_middleware,
  category_delete
);
router.get("/edit-category/:categorySlug", admin_middleware, category_edit);
router.patch("/update-category/:categoryId", admin_middleware, category_update);

// for tag route
router.post("/add-tag", admin_middleware, tag_add);
router.get("/get-tag", admin_middleware, tag_get);
router.delete("/delete-tag/:tagId", admin_middleware, tag_delete);
router.get("/edit-tag/:tagSlug", admin_middleware, tag_eidt);
router.patch("/update-tag/:tagId", admin_middleware, tag_update);

// for article route
router.get("/get-tag-category", admin_middleware, get_tag_category);
router.post("/article-add", admin_middleware, article_add);
router.get("/get-article", admin_middleware, article_get);
router.get("/edit-article/:articleSlug", admin_middleware, article_edit);
router.post("/update-article", admin_middleware, article_update);

module.exports = router;
