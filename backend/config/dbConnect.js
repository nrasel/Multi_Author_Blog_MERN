const mongoose = require("mongoose");

module.exports = dbConnect = async () => {
  try {
    const response = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    console.log("db connected...");
  } catch (error) {
    console.log(error);
  }
};
