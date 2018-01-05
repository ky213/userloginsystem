"use strict";
//process.env.NODE_ENV = "production";
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars"); // "express-handlebars"
const app = express();

//Setup
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main"
});
app.disable("x-powered-by");
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//Midllewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.all("/*", function(req, res) {
  res.status(404);
  res.render("404");
});

app.listen(80, function() {
  console.log("express-handlebars example server listening on:" + 80);
});
