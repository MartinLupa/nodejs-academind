const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product => GET
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(products);
  res.redirect("/");
});

module.exports = { routes: router, products };