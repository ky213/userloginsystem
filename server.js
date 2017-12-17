"use strict";

const express = require("express");
const exphbs = require("express-handlebars"); // "express-handlebars"

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("home");
});

app.listen(3000, function() {
  console.log("express-handlebars example server listening on: 3000");
});
