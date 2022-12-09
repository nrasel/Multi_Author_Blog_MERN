const express = require("express");
const dotEnv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.get("/", (req, res) => {
  res.send("server start..");
});

app.use("/rest-api", authRoutes);

// fonfigure
dotEnv.config({
  path: "backend/config/config.env",
});

// db connect
dbConnect();
// port
const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running port ${PORT}`);
  }
});
