const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");

//Body parsing setup.
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "/views/404.html"));
});

//Server listener
app.listen(3000);
