$(function() {
	getDinos();
});

function getDinos(){
	$.get("/dinos", function(res){
		var dinos = res;
		
		console.log(dinos);

		renderDinos(dinos);
		
	});
};

function renderDinos(dinoArray) {
	
	dinosTemplate = _.template($("#dinos-template").html());
	
	dinoItems = dinoArray.map(function(dino) {
    return dinosTemplate(dino);
	});
	// clear content (for repeated use)
	$("#dino-ul").html("");
	// append foods to ul
	$("#dino-ul").append(dinoItems);



	//dinoArray.forEach(function(dino){
	//	var dinoHTML = dinosTemplate(dino);
	//	$("#dino-ul").append(dinosTemplate);
	//});

};