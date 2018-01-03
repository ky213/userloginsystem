"use strict";
process.env.NODE_ENV = "production";
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars"); // "express-handlebars"
const app = express();
const middlewares = require("./server/middlewares");

//Setup
app.disable("x-powered-by");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Midllewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.post("/register", middlewares.register, function(req, res) {});

app.post("/login", middlewares.login, function(req, res) {});

app.get("/dashboard", function(req, res) {
  res.render("dashboard");
});

app.all("/*", function(req, res) {
  res.status(404);
  res.render("404");
});

app.use(middlewares.errorHandler);

app.listen(80, function() {
  console.log("express-handlebars example server listening on:" + 80);
});
