const {
  home_article_get,
  home_tag_category_get,
  old_recent_article_get,
  home_category_get,
} = require("../../controller/home/homeController");

const router = require("express").Router();

router.get("/home-article-get", home_article_get);
router.get("/home/get-tag-category", home_tag_category_get);
router.get("/article/recent-old-get",old_recent_article_get);

router.get("/get-home-category",home_category_get);

module.exports = router;
