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
