const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  const templatePath = path.join(rootDir, "/views/shop.html");
  res.sendFile(templatePath);
});

module.exports = router;
