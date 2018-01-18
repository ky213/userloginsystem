const express = require("express");
const facebookLogin = express.Router();
const mw = require("./middleware");

facebookLogin.post("/", function(req, res) {
    let options = req.app.locals.defaults;
    if (req.body.status = "connected") {
        options.userLoggedin = true ;
        options.topbarColor = "success";
        res.redirect("..");
    }
});

module.exports = facebookLogin;
