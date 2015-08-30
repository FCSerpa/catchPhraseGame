var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/phrases_app");

module.exports.Dino = require("./phrases.js");