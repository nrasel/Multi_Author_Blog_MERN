const { home_article_get } = require("../../controller/home/homeController");

const router = require("express").Router();

router.get("/home-article-get", home_article_get);

module.exports = router;
