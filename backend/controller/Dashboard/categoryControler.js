const categoryModel = require("../../models/categoryModel");

// category add controller
module.exports.category_add = async (req, res) => {
  const { categoryName, categoryDes } = req.body;
  //   console.log(categoryName);
  const error = {};
  if (!categoryName) {
    error.categoryName = "Please Provide Category Name";
  }
  if (!categoryDes) {
    error.categoryDes = "Please Provide Category Description";
  }

  if (Object.keys(error).length == 0) {
    // ক্যাটাগরিটাকে চেনার জন্য একটা স্ল্যাগ বানাতে হবে। trim() দিয়ে স্ল্যাগ বানানোর সময় যদি কোন স্পেস দেওয়া হয় তাইলে সেইটা রিমুভ হয়ে যাবে । split() দিয়ে কোন ওয়ার্ড আলাদা থাকেল join() দিয়ে তাদের জয়েন করে দিবে।
    const categorySlug = categoryName.trim().split(" ").join("-");

    // স্ল্যাগ তৈরি হবার পর আমরা চেক করব যে সেম নামে আর কোন স্ল্যাগ আছে কিনা।
    try {
      const checkCategory = await categoryModel.findOne({ categorySlug });
      if (checkCategory) {
        res
          .status(404)
          .json({ errorMessage: { error: "Already Added Category" } });
      } else {
        await categoryModel.create({
          categoryName: categoryName.trim(),
          categorySlug,
          categoryDes,
        });
        res.status(200).json({
          successMessage: "Category Add Successful",
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Errror" } });
    }
  } else {
    res.status(400).json({ errorMessage: error });
  }
};

// category get controller
module.exports.category_get = async (req, res) => {
  const { page, searchValue } = req.query;

  // for pagination
  const perPage = 2;
  const skipPage = parseInt(page - 1) * perPage;
  if (searchValue === "undefined" || !searchValue) {
    try {
      // show tag in (all tage component)
      const categoryCount = await categoryModel.find({}).countDocuments();
     
      const getCategory = await categoryModel
        .find({})
        .skip(skipPage)
        .limit(perPage)
        .sort({ createdAt: -1 });
      res.status(200).json({
        allCategory: getCategory,
        perPage,
        categoryCount,
      });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  } else {
    try {
      const categoryCount = await categoryModel.find({}).countDocuments();
     
      let getCategory = await categoryModel.find({});
      // for search
      getCategory = getCategory.filter(
        (c) =>
          c.categoryName.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
      );
      res.status(200).json({
        allCategory: getCategory,
        perPage,
        categoryCount,
      });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  }
};

module.exports.category_delete = async (req, res) => {
  const { categoryId } = req.params;
  try {
    await categoryModel.findByIdAndDelete(categoryId);
    res.status(200).json({
      successMessage: "Category Delete Success",
    });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
  }
};

module.exports.category_edit = async (req, res) => {
  const { categorySlug } = req.params;

  try {
    const editCategory = await categoryModel.findOne({ categorySlug });

    res.status(200).json({
      editCategory,
    });
  } catch (error) {
    res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
  }
};

module.exports.category_update = async (req, res) => {
  const { categoryId } = req.params;
  const { categoryName, categoryDes } = req.body;

  const error = {};

  if (!categoryName) {
    error.categoryName = "Please Provide Category Name";
  }
  if (!categoryDes) {
    error.categoryDes = "Please Provide Category Description";
  }

  if (Object.keys(error).length == 0) {
    const categorySlug = categoryName.trim().split(" ").join("-");
    try {
      await categoryModel.findByIdAndUpdate(categoryId, {
        categoryName: categoryName.trim(),
        categorySlug,
        categoryDes,
      });
      res.status(200).json({ successMessage: "Category update successful" });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  } else {
    res.status(404).json({ errorMessage: error });
  }
};
