const categoryModel = require("../../models/categoryModel");

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
