const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname,"static", "index.html"));
});

app.use(express.static("static"));

app.listen(process.env.PORT, () => {
  console.log("[listening] SERVER ON", process.env.PORT);
});
