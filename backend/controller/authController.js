const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const adminModel = require("../models/adminModel");
const userModel = require("../models/userModel");
const nodeMailer = require("nodemailer");
const fs = require("fs");

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
    error.password = "Please Provide Your Password";
  }

  //যদি ইউজার ইনফরমেশন প্রোভাইড করে তাইলে কি সেট হবে নাইলে কি সেট হবে না সেই কন্ডিশন কে কানে লাগিয়ে নিচের কোডটা কাজ করবে
  if (Object.keys(error).length > 0) {
    // response back back end to frontend
    return res.status(400).json({ errorMessage: error });
  } else {
    try {
      const getAdmin = await adminModel.findOne({ email }).select("+password");
      // console.log(getAdmin);
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
            .json({ errorMessage: { error: "Password doesn't match" } });
        }
      } else {
        return res
          .status(400)
          .json({ errorMessage: { error: "Email doesn't exist" } });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ errorMessage: { error: "Internal Server Error" } });
    }
  }
};

module.exports.user_register = async (req, res) => {
  const formData = formidable();
  formData.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(500)
        .json({ errorMessage: { error: "form data parse failed" } });
    } else {
      const { name, email, password } = fields;
      const errorData = {};
      if (!name) {
        errorData.name = "Please provide your name";
      }
      if (!email) {
        errorData.email = "Please provide your email";
      }
      if (email && !validator.isEmail(email)) {
        errorData.email = "Please provide valid email";
      }
      if (!password) {
        errorData.password = "Please provide your password";
      }
      if (Object.keys(files).length === 0) {
        errorData.image = "Please provide your image";
      }
      if (Object.keys(errorData).length === 0) {
        try {
          const getUser = await userModel.findOne({ email });
          if (getUser) {
            return res
              .status(500)
              .json({ errorMessage: { error: "Your email already used" } });
          } else {
            const otp = Math.floor(Math.random() * 100000 + 345678);
            const transporter = nodeMailer.createTransport({
              service: "Gmail",
              auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD,
              },
            });
            const mailOption = {
              from: process.env.USER_EMAIL,
              to: email,
              subject: "Sending email mern blog",
              text: `${name} your OTP Code ${otp}`,
              html: `<div style={{padding:'10px}}><h3>Your otp code ${otp}</h3></div>`,
            };
            transporter.sendMail(mailOption, async (error, info) => {
              if (error) {
                return res.status(500).json({
                  errorMessage: {
                    error: "Something went't wrong please try again",
                  },
                });
              } else {
                const verifyEmailToken = jwt.sign(
                  {
                    email,
                    name,
                    password,
                    imageInfo: files,
                    otpCode: otp,
                  },
                  process.env.SECRET,
                  {
                    expiresIn: process.env.TOKEN_EXP,
                  }
                );
                // cookie er moddhe jei token ase seita ei somoy por remove hoye jabe
                const option = {
                  expeire: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                };
                res
                  .status(201)
                  .cookie("emailVerify_token", verifyEmailToken, option)
                  .json({ successMessage: "Check your email and submit otp" });
              }
            });
          }
        } catch (error) {}
      } else {
        return res.status(400).json({ errorMessage: errorData });
      }
    }
  });
};

module.exports.verify_email = async (req, res) => {
  console.log(req.body);
  const { otp } = req.body;
  const { emailVerify_token } = req.cookies;
  if (!otp) {
    res.status(404).json({ errorMessage: "Please provide your otp" });
  } else {
    const { name, email, password, otpCode, imageInfo } = await jwt.verify(
      emailVerify_token,
      process.env.SECRET
    );

    const imageName = Date.now() + imageInfo.image.originalFilename;

    const disPath =
      __dirname + `../../../frontend/public/userImage/${imageName}`;

    try {
      if (parseInt(otp) !== otpCode) {
        res.status(404).json({ errorMessage: "Please provide your valid otp" });
      } else {
        fs.copyFile(imageInfo.image.filepath, disPath, async (err) => {
          if (!err) {
            const creatUser = await userModel.create({
              userName: name,
              email,
              loginMethod: "manually",
              password: await bcrypt.hash(password, 10),
              image: `http://localhost:3000/userImage/${imageName}`,
            });
            console.log(creatUser);
          }
        });
      }
    } catch (error) {}
  }
};
