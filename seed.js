var db = require("./models");

var dinoItems = [
	{name: "Triceratops", text: "Cretaceous herbivore. Quadripedal. Three horns on face."},
	{name: "Stegasaurus", text: "Jurassic herbivore.  Quadripedal. Vertical plates down the back, and a spikey tail."},
	{name: "Archaeopterix", text: "Jurassic carnivore.  Bipedal.  Tiny, feathered, long considered the first bird."},
	{name: "Tyrannosaurus", text: "Cretaceous carnivore. Bipedal.  Large predator, known for it's small forelimbs."},
	{name: "Brontosaurus", text: "Jurassic herbivore. Quadripedal.  Large sauropod.  For a time had to change its name due to a paleontological error, but its original name has since been restored."}
	];

db.Dinos.remove({}, function(err, dinos){

	db.Dinos.create(dinoItems, function(err, dinos){
		if (err) {return console.log(err);}
		console.log(dinos);
		process.exit();
	});

});