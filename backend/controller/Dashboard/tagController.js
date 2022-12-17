const tagModel = require("../../models/tagModel");

module.exports.tag_add = async (req, res) => {
  const { tagName, tagDes } = req.body;

  const error = {};

  if (!tagName) {
    error.tagName = "Please Provide Tag Name";
  }
  if (!tagDes) {
    error.tagDes = "Please Provide Tag Description";
  }

  if (Object.keys(error).length == 0) {
    // tag চেনার জন্য একটা স্ল্যাগ বানাতে হবে। trim() দিয়ে স্ল্যাগ বানানোর সময় যদি কোন স্পেস দেওয়া হয় তাইলে সেইটা রিমুভ হয়ে যাবে । split() দিয়ে কোন ওয়ার্ড আলাদা থাকেল join() দিয়ে তাদের জয়েন করে দিবে।
    const tagSlug = tagName.trim().split(" ").join("-");

    // স্ল্যাগ তৈরি হবার পর আমরা চেক করব যে সেম নামে আর কোন স্ল্যাগ আছে কিনা।
    try {
      const checkTag = await tagModel.findOne({ tagSlug });
      if (checkTag) {
        res.status(404).json({ errorMessage: { error: "Already added tag" } });
      } else {
        await tagModel.create({
          tagName: tagName.trim(),
          tagSlug,
          tagDes,
        });
      }
      res.status(200).json({ successMessage: "Tag add successful" });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Serverr Error" } });
    }
  } else {
    res.status(400).json({ errorMessage: error });
  }
};

module.exports.tag_get = async (req, res) => {
  const { page, searchValue } = req.query;

  //for paginationn

  const perPage = 2;
  const skipPage = parseInt(page - 1) * perPage;
  if (searchValue === "undefined" || !searchValue) {
    try {
      // যদি সার্চ ভেলু তাইলে এইটা
      const tagCount = await tagModel.find({}).countDocuments();
      const getTag = await tagModel
        .find({})
        .skip(skipPage)
        .limit(perPage)
        .sort({ createdAt: -1 });

      res.status(200).json({
        allTag: getTag,
        tagCount,
        perPage,
      });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  } else {
    // আর যদি সার্চ ভেলু না থাকে তা ইলে এইটা
    try {
      const tagCount = await tagModel.find({}).countDocuments();
      let getTag = await tagModel.find({});
      getTag = getTag.filter(
        (c) => c.tagName.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
      );
      res.status(200).json({ allTag: allTag, perPage, tagCount });
    } catch (error) {
      res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  }
};
