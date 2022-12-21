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
