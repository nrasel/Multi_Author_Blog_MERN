const formidable = require("formidable");
const tagModel = require("../../models/tagModel");
const categoryModel = require("../../models/categoryModel");
const articleModel = require("../../models/articleModel");
const { article_validator } = require("../../validator/validator");
const fs = require("fs");
module.exports.get_tag_category = async (req, res) => {
  try {
    const getTag = await tagModel.find({});
    const getCategory = await categoryModel.find({});
    // console.log(getTag);
    res.status(200).json({ getTag, getCategory });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
  }
};

module.exports.article_add = (req, res) => {
  // eigula muloto authMiddleware er moddhe cookie take decode kore req er sathe set kora
  const { adminId, adminName } = req;
  // console.log(req.adminId);
  // console.log(req.adminName);

  //req.body ভেতর ফর্ম ডাটা সিম্পল ভাবে এক্সেস করতে পারবো না তাই formidable npm package ব্যাবহার করতে হবে
  const formDataHandle = formidable({
    multiples: true,
  });
  formDataHandle.parse(req, (err, fields, files) => {
    //যদি কোন এরর না থাকে তাইলে পরের কাজ গুলো হবে
    if (!err) {
      const { title, category, tag, slug, text } = fields;
      //সিলেক্ট ফর্ম এর ভেলু হিসেবে ক্যাটেগরি স্ল্যাগ ক্যাটেগরির জন্য এবং ট্যাগ এর জন্য ট্যাগস্ল্যাগ ব্যাবহার করেছিলাম এইটা ( ArticleAdd.jsx ফাইল এর মধ্যে ) তাই fileds এর ভেলু গুলা আমরা পাচ্ছি স্ল্যাগ হিসেবে
      // console.log(category,tag);

      //এখন এগুলো ভেলিডেট করতে হবে
      // custom validator from validator folder and using article_validator() function
      const validate = article_validator(fields, files);

      if (validate.validated) {
        const categoryName = category.split("-").join(" ");
        const tagName = tag.split("-").join(" ");

        files.image.originalFilename =
          Date.now() + files.image.originalFilename;
        const uploadPath =
          __dirname +
          `../../../../frontend/public/articleImage/${files.image.originalFilename}`;

        fs.copyFile(files.image.filepath, uploadPath, async (error) => {
          if (error) {
            res
              .status(400)
              .json({ errorMessage: { imageUpload: "Image upload failed" } });
          } else {
            try {
              await articleModel.create({
                adminId,
                adminName,
                title,
                slug,
                category: categoryName,
                category_slug: category,
                tag: tagName,
                tag_slug: tag,
                article_text: text,
                image: files.image.originalFilename,
              });
              res.status(201).json({
                successMessage: "Article add successful",
              });
            } catch (error) {
              console.log(error.message);
              res.status(500).json({
                errorMessage: { error: "Internal Server Error" },
              });
            }
          }
        });
      } else {
        res.status(400).json({ errorMessage: validate.error });
      }
    }
  });
};

module.exports.article_get = async (req, res) => {
  const { adminId, role } = req;
  const { currentPage, searchValue } = req.query;

  const perPage = 2;
  const skipPage = parseInt(currentPage - 1) * perPage;

  let articles = [];

  try {
    let articleCount = 0;

    if (searchValue === "undefined" || !searchValue) {
      if (role === "admin") {
        articleCount = await articleModel.find({}).countDocuments();
        articles = await articleModel
          .find({})
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
      } else {
        articleCount = await articleModel.find({ adminId }).countDocuments();
        articles = await articleModel
          .find({ adminId })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
      }
    } else {
      if (role === "admin") {
        articleCount = await articleModel.find({}).countDocuments();
        articles = await articleModel
          .find({})
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        articles = articles.filter(
          (ar) => ar.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
        );
      } else {
        articleCount = await articleModel.find({ adminId }).countDocuments();
        articles = await articleModel
          .find({ adminId })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        articles = articles.filter(
          (ar) => ar.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
        );
      }
    }
    res.status(200).json({
      allArticle: articles,
      perPage,
      articleCount,
    });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
  }
};

module.exports.article_edit = async (req, res) => {
  const { articleSlug } = req.params;
  //eita middleware theke asche
  const { adminId, role } = req;

  try {
    //এখানে ফ্রন্ট এন্ড থেকে পাঠানো স্ল্যাগ এবং ডাটাবেজে ক্রিয়েট করা স্ল্যাগ ম্যাচ করা হচ্ছে
    const getArticle = await articleModel.findOne({ slug: articleSlug });
    if (
      (getArticle && getArticle?.adminId === adminId) ||
      getArticle?.role === role
    ) {
      res.status(200).json({
        editArticle: getArticle,
      });
    } else {
      res.status(404).json({
        errorMessage: { error: "You can't edit this article" },
      });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
  }
};

module.exports.article_update = async (req, res) => {
  const { title, category, tag, slug, text, articleId } = req.body;
  const { adminId, role } = req;
  const validate = article_validator(req.body, "");

  if (validate.validated) {
    try {
      const getArticle = await articleModel.findById(articleId);

      if (
        (getArticle && getArticle.adminId === adminId) ||
        getArticle.role === role
      ) {
        const categoryName = category.split("-").join(" ");
        const tagName = tag.split("-").join(" ");

        await articleModel.findByIdAndUpdate(articleId, {
          title: title.trim(),
          slug: slug.trim(),
          category: categoryName,
          category_slug: category,
          tag: tagName,
          tag_slug: tag,
          article_text: text,
        });
        res.status(201).json({
          successMessage: "Article update successful",
        });
      } else {
        res.status(404).json({
          errorMessage: { error: "Article Update failed" },
        });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  } else {
    res.status(400).json({ errorMessage: validate.error });
  }
};
