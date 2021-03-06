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

app.get("/phrases", function (req, res){
	db.Dino.find({}, function(err, dinoArray){
		if (err) {
			console.log(err);
			return res.sendStatus(400);
		}
		res.send(dinoArray);
	})
});

app.post("/phrases", function (req, res){
	var newDino = req.body;
	db.Dino.create(newDino, function(err, dino){
		if (err) {
			console.log(err);
			return res.sendStatus(400);
		}
		res.send(dino);
	});
});

app.delete("/phrases/:id", function destroy(req, res){
	var id = req.params.id;
	db.Dino.remove({_id: id}, function(err, dino){
		if (err) {
			console.log(err);
			return res.sendStatus(400);
		}
		res.sendStatus(200);
	});
});

/*
app.get("/phrases/:id", function (req, res){
	var id = req.params.id;
	var newText = req.body;
	console.log(id);
	console.log(newText);
	db.Dino.findByIdAndUpdate({_id: id}, {text: newText}, function(err, dino){
		if (err) {
			console.log(err);
			return res.sendStatus(400);
		}
		res.send(dino);
	})
})
*/

var dinoItems = [
	{name: "Triceratops", text: "Cretaceous herbivore. Quadripedal. Three horns on face."},
	{name: "Stegosaurus", text: "Jurassic herbivore.  Quadripedal. Vertical plates down the back, and a spikey tail."},
	{name: "Archaeopteryx", text: "Jurassic carnivore.  Bipedal.  Tiny, feathered, long considered the first bird."},
	{name: "Tyrannosaurus", text: "Cretaceous carnivore. Bipedal.  Large predator, known for it's small forelimbs."},
	{name: "Brontosaurus", text: "Jurassic herbivore. Quadripedal.  Large sauropod.  For a time had to change its name due to a paleontological error, but its original name has since been restored."}
	];

app.listen(6500, function(){
	console.log("listening on port 6500");
});