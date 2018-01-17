const express = require("express");
const logout = express.Router();

logout.get("/", function(req, res) {
  let options = Object.assign(req.app.locals.defaults, {
    userLoggedin: false,
    topbarColor: "warning"
  });
  res.redirect("..");
});

module.exports = logout;
