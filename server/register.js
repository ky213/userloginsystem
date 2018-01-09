const express = require("express");
const register = express.Router();

register.post("/register", function(req, res) {
  console.log(req.body);
});

module.exports = register;