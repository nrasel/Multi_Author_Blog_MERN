const { model, Schema } = require("mongoose");

const articleSchema = new Schema(
  {
    adminId: {
      type: String,
      required: true,
    },
    adminName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    category_slug: {
      type: String,
      required: true,
    },
    tag_slug: {
      type: String,
      required: true,
    },
    article_text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    // এই মডেল এর মাদ্ধমে একই ইউজার জেন একের অধিক লাইক ডিস্লাইক না করতে পারে সেইটা ডিফাইন করা হলো  এবং ইউজার এর ইনফরমেশন ইস্টর করে রাখবে
    like_dislike: [
      {
        like_disliker_id: {
          type: String,
          required: true,
        },
        like_or_dislike: {
          type: String,
          default: "",
        },
      },
    ],
    viewer: {
      type: Number,
      default: 0,
    },
    //এই ভিউয়ার আইপি দিয়ে মুলতো কতোজন ইউজার ভিউ করেছে তা কাউন্ট করা হবে ইউজার এর লোকাল মেশিন এর আইপি
    viewerIp: [
      {
        ip: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("article", articleSchema);
