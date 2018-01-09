const express = require("express");
const pwdReset = express.Router();

pwdReset.post("/passwordReset", function(req, res) {
  res.json(req.body);
});

module.exports = pwdReset;
