const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form method="POST" action="/admin/product" title="product"><input type="text" name="product"><button type="submit">ADD PRODUCT</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  const product = req.body.product;
  console.log(product);
  res.send(`<ul><li>${product}</li></ul>`);
});

module.exports = router;
