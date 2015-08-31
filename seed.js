var db = require("./models");

var dinoItems = [
	{name: "Triceratops", text: "Cretaceous herbivore. Quadripedal. Named for the three horns on its face."},
	{name: "Stegosaurus", text: "Jurassic herbivore.  Quadripedal. Vertical plates down the back, and a spikey tail."},
	{name: "Archaeopteryx", text: "Jurassic carnivore.  Bipedal.  Tiny, feathered, long considered the first bird."},
	{name: "Tyrannosaurus", text: "Cretaceous carnivore. Bipedal.  Large predator, known for it's small forelimbs."},
	{name: "Brontosaurus", text: "Jurassic herbivore. Quadripedal.  Large sauropod.  For a time had to change its name due to a paleontological error, but its original name has since been restored."},
	{name: "Hummingbird?", text: "Holocene herbivore. Bipedal. Tiny dinosaur, consumes its own weight in nectar every day, fastest animal on earth by size."},
	{name: "Ankylosaurus," text: "Cretaceous herbivore. Quadripedal. This heavily armored dinosaur has a huge hammer shaped bony growth at the end of its tail."},
	];

	
	//name: Deinonychus
	//name: Coelophysus
	//name: Dilophosaurus

db.Dino.remove({}, function(err, dinos){

	db.Dino.create(dinoItems, function(err, dinos){
		if (err) {return console.log(err);}
		console.log(dinos);
		process.exit();
	});

});