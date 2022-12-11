const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");
module.exports.admin_login = async (req, res) => {
  // first of all req.body showed undefined. solve this problem we use body parser
  // body parser mainly handle json data.
  // console.log(req.body);
  // ফ্রন্ট এন্ড থেকে ইউজার যখন ডাটা পাঠাবে তখন ডাটা গুলা ভ্যালিড কিনা তা ব্যাকেন্ডে চেক করলে ভালো হয় ফ্রন্ট এন্ডেও চেক করা যায় তবে ব্যাক এন্ডে করলে ভালো হয়। তাই এখানে চেক করা হলো।
  const { email, password } = req.body;

  const error = {};
  if (email && !validator.isEmail(email)) {
    error.email = "Please Provide Your Valid Email";
  }
  if (!email) {
    error.email = "Please Provide Your Email";
  }
  if (!password) {
    error.email = "Please Provide Your Password";
  }

  //যদি ইউজার ইনফরমেশন প্রোভাইড করে তাইলে কি সেট হবে নাইলে কি সেট হবে না সেই কন্ডিশন কে কানে লাগিয়ে নিচের কোডটা কাজ করবে
  if (Object.keys(error).length > 0) {
    // response back back end to frontend
    return res.status(400).json({ errorMessage: error });
  } else {
    try {
      const getAdmin = await adminModel.findOne({ email }).select("+password");
      console.log(getAdmin);
      if (getAdmin) {
        const matchPassword = await bcrypt.compare(password, getAdmin.password);
        if (matchPassword) {
          //যদি পাসওয়ার্ড ম্যাচ করে তাইলে এডমিন এর ইনফরমেশন দিয়ে টোকেন ক্রিয়েট করে টোকেনটা কুকি আকারে ফ্রন্ট এন্ডে সেন্ড করা হলো|

          const token = jwt.sign(
            {
              id: getAdmin._id,
              name: getAdmin.adminName,
              role: getAdmin.role,
              image: getAdmin.image,
            },
            process.env.SECRET,
            { expiresIn: "7d" }
          );

          return res
            .status(200)
            .cookie("blog_token", token, {
              expires: new Date(
                Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000
              ),
              httpOnly: true,
            })
            .json({ successMessage: "Login Successful", token });
        } else {
          return res
            .status(400)
            .json({ errorMessage: "Password doesn't match" });
        }
      } else {
        return res.status(400).json({ errorMessage: "Email doesn't exist" });
      }
    } catch (error) {
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
  }
};
