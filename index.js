"use strict";

const express = require("express");
const exphbs = require("express-handlebars"); // "express-handlebars"
const app = express();
const $ = require("jquery");

app.disable("x-powered-by");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/register", function(req, res) {
  let request = ''; 
   
  res.send($  );
});

app.post("/login", function(req, res) {
  res.send(`${req} \n\n ${req.body}`);
});

app.get("/dist/bundle.js", function(req, res) {
  res.sendFile(__dirname + "/dist/bundle.js");
});
app.listen(3000, function() {
  console.log("express-handlebars example server listening on:3000");
});
