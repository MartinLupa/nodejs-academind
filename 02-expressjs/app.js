const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Body parsing setup.
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 - Page not found</h1>");
});

//Server listener
app.listen(3000);
