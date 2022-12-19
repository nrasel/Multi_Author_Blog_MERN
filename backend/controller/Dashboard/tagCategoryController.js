const formidable = require("formidable");
const tagModel = require("../../models/tagModel");
const categoryModel = require("../../models/categoryModel");
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
  console.log(req.body);
  //req.body ভেতর ফর্ম ডাটা সিম্পল ভাবে এক্সেস করতে পারবো না তাই formidable npm package ব্যাবহার করতে হবে
  const formDataHandle = formidable({
    multiples: true,
  });
  formDataHandle.parse(req, (err, fields, files) => {
    //যদি কোন এরর না থাকে তাইলে পরের কাজ গুলো হবে
    if (!err) {
      //এখন এগুলো ভেলিডেট করতে হবে
      const { title, category, tag, slug, text } = fields;
      const { image } = files;
    }
  });
};
