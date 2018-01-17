const express = require("express");
const global = express.Router();

//Routes
global.get("/", function(req, res) {
  let options = req.app.locals.defaults;
  res.render("home", { options });
});

global.get("/login", function(req, res) {
  let options = req.app.locals.defaults;
  res.render("login", { options });
});

global.get("/register", function(req, res) {
  let options = req.app.locals.defaults;
  res.render("register", { options });
});

global.get("/passwordreset", function(req, res) {
  let options = req.app.locals.defaults;
  res.render("passwordReset", { options });
});

global.get("/dashboard", function(req, res) {
  let options = req.app.locals.defaults;

  if (options.userLoggedin) {
    res.render("dashboard", { options });
  } else res.redirect("/404");
});

global.get("/dashboard/:partial", function(req, res) {
  let options = req.app.locals.defaults;

  if (options.userLoggedin) {
    if (req.params.partial === "profile") {
      options.profile = true;
      options.settings = false; 
      res.redirect("/dashboard");
    }
    if (req.params.partial === "settings") {
      options.settings = true;
      options.profile = false;
      res.redirect("/dashboard");
    }
  } else res.redirect("/404");
});

module.exports = global;
