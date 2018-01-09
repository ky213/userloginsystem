const express = require("express");
const login = express.Router();

login.post("/login", function(req, res) {
  console.log(req.body);
});

module.exports = login;
