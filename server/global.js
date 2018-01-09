const express=require("express");
const global = express.Router();

//Routes
global.get("/", function(req, res) {
    res.render("home");
  });
  
  global.get("/login", function(req, res) {
    res.render("login");
  });
  
  global.get("/register", function(req, res) {
    res.render("register");
  });
  
  global.get("/passwordreset", function(req, res) {
    res.render("passwordReset");
  });
  
 

  module.exports = global;