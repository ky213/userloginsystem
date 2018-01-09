
("use strict");
//process.env.NODE_ENV = "production";
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars"); // "express-handlebars"
const app = express();
const global = require("./server/global");
const login = require("./server/login");
const register = require("./server/register");
const pwdReset = require("./server/pwdReset");

//Setup
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main"
});
app.disable("x-powered-by");
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//Logic
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(global);
app.use(login);
app.use(register);
app.use(pwdReset);

app.use(function(err, req, res, next) {
  res.render("500");
});

app.all("/*", function(req, res) {
  res.status(404);
  res.render("404");
});

app.listen(80, function() {
  console.log("express-handlebars example server listening on:" + 80);
});
