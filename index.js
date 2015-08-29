var express = require("express");
var app = express();
var path = requre("path");
var bodyParser = require("body-parser");
var _ = require("underscore");
var views = path.join(process.cwd(), "views/");
var db = require('./models');

app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));