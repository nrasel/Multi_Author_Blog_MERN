const express = require("express");
const dotEnv = require("dotenv");
const app = express();

app.get("/", (req, res) => {
  res.send("server start..");
});

// fonfigure
dotEnv.config({
  path: "backend/config/config.env",
});
// port
const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running port ${PORT}`);
  }
});
