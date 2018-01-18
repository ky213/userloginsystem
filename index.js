("use strict");
//process.env.NODE_ENV = "production";
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const global = require("./server/global"); //Global routes
const login = require("./server/login"); //Login routes
const register = require("./server/register"); //Registeration routes
const pwdReset = require("./server/pwdReset"); //Password reset routes
const logout = require("./server/logout"); //Logout routes
const facebookLogin = require("./server/facebookLogin"); //Facebook login routes

//Setup
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main"
});
app.disable("x-powered-by");
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.locals.defaults = {
  userLoggedin: false,
  topbarColor: "warning"
};

//Logic
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(global);
app.use("/login", login);
app.use("/register", register);
app.use("/passwordreset", pwdReset);
app.use("/logout", logout);
app.use("/facebookLogin", facebookLogin);

// Error page
app.use(function(err, req, res, next) {
  let options = req.app.locals.defaults;
  res.status(500);
  res.render("500", { options });
});

// Not Found page
app.all("/*", function(req, res) {
  let options = req.app.locals.defaults;
  res.status(404);
  res.render("404", { options });
});

app.listen(80, function() {
  console.log("express-handlebars example server listening on:" + 80);
});
