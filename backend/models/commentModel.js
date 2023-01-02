const { model, Schema } = require("mongoose");

const commentShema = new Schema(
  {
    articleId: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
    replyComment: [
      {
        replyName: {
          type: String,
          required: true,
        },
        replyImage: {
          type: String,
          required: true,
        },
        replyTime: {
          type: String,
          required: true,
        },
        replyText: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("comment", commentShema);
