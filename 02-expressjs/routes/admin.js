const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  const templatePath = path.join(rootDir, "/views/add-product.html");
  res.sendFile(templatePath);
});

router.post("/product", (req, res, next) => {
  const product = req.body.product;
  console.log(product);
  res.send(`<ul><li>${product}</li></ul>`);
});

module.exports = router;
