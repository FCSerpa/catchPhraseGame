var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var _ = require("underscore");
var views = path.join(process.cwd(), "views/");
var db = require('./models');

app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
	res.sendFile(path.join(views + 'index.html'));
});

app.get("/images/Dinosaurs.jpg", function(req, res){
	res.sendFile(path.join(views + 'images/Dinosaurs.jpg'));
});

app.get("/dinos", function (req, res){
	res.send(dinoItems);
});

var dinoItems = [
	{name: "Triceratops", description: "Cretaceous herbivore. Quadripedal. Three horns on face."},
	{name: "Stegasaurus", description: "Jurassic herbivore.  Quadripedal. Vertical plates down the back, and a spikey tail."},
	{name: "Archaeopterix", description: "Jurassic carnivore.  Bipedal.  Tiny, feathered, long considered the first bird."},
	{name: "Tyrannosaurus", description: "Cretaceous carnivore. Bipedal.  Large predator, known for it's small forelimbs."},
	{name: "Brontosaurus", description: "Jurassic herbivore. Quadripedal.  Large sauropod.  For a time had to change its name due to a paleontological error, but its original name has since been restored."}
	];

app.listen(6500, function(){
	console.log("listening on port 6500");
});