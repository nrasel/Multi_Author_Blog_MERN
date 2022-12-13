//মিডিল ওয়ার এর কারনে এডমিন লগিন না করে কোন ক্যাটগরি এড করতে পারবে না। তাই মিডিল ওয়ারটা ইউজ করা যায়। মিডিল ওয়ার মূলত ক্লাইয়েন্ট এবং সার্ভারের মাঝে থেকে ক্লায়েন্ট কে তার রিকুয়েস্ট অনুযায় রেস্পন্স করবে।
module.exports.admin_middleware = (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    res.status(409).json({ errorMessage: { error: "Please login first" } });
  } else {
    next();
  }
};
