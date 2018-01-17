const express = require("express");
const register = express.Router();
const mw = require("./middleware");

register.post("/", mw.registerUser,function(req, res) {
  res.redirect("back");
});

module.exports = register;