const jwt = require("jsonwebtoken");
//মিডিল ওয়ার এর কারনে এডমিন লগিন না করে কোন ক্যাটগরি এড করতে পারবে না। তাই মিডিল ওয়ারটা ইউজ করা যায়। মিডিল ওয়ার মূলত ক্লাইয়েন্ট এবং সার্ভারের মাঝে থেকে ক্লায়েন্ট কে তার রিকুয়েস্ট অনুযায় রেস্পন্স করবে।

// ei middle ta dashboard handle korar jonno
module.exports.admin_middleware = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    res.status(409).json({ errorMessage: { error: "Please login first" } });
  } else {
    //আর্টিকেল মডেল থেকে আমরা দেখতে পারি আমাদের এডমিন আইডি এবং এডমিন নাম লাগবে এইটা আমরা ফ্রন্ট এন্ড থেকে পাঠাতে পারি কিন্তু আমরা যখন কুকি সেট করি তখন এডমিন ইনফরমেশন দিয়ে কুকি সেট করেছিলাম এই কুকি থেকে আমরা এডমিন নেম এবং আইডি নিতে পারি কুকি টাকে ডিকোড করে
    const decodeToken = await jwt.verify(blog_token, process.env.SECRET);
    // eikhane jeigula set kortesi seigula tagCategoryController.js filer er req er moddhe pabo

    req.adminId = decodeToken.id;
    req.adminName = decodeToken.name;
    req.role = decodeToken.role;
    next();
  }
};

// ei middleware ta public page gula handle korar jonno
module.exports.user = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    req.userId = "";
    req.userName = "";
    req.role = "";
  } else {
    // eikhane jeigula set kortesi seigula homeController.js filer er req er moddhe pabo
    const decodeToken = await jwt.verify(blog_token, process.env.SECRET);
    req.userId = decodeToken.id;
    req.userName = decodeToken.name;
    req.role = decodeToken.role;
    next();
  }
};

module.exports.auth_user = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    res.status(409).json({ errorMessage: { error: "Please login first" } });
  } else {
    const decodeToken = jwt.verify(blog_token, process.env.SECRET);
    if (decodeToken.role === "user" && decodeToken.accessStatus === "unblock") {
      req.userId = decodeToken.id;
      req.role = decodeToken.role;
      req.userName = decodeToken.name;
      next();
    } else {
      res.status(404).json({
        errorMessage: { error: "You can not access" },
      });
    }
  }
};
