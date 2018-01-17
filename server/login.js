const express = require("express");
const login = express.Router();
const mw = require("./middleware");

login.post("/", mw.authUser, function(req, res) {
    res.redirect("/dashboard")
});

module.exports = login;
