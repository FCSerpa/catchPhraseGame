$(function() {
	getDinos();

	$("#new-dino-form").on("submit", function(e){
		e.preventDefault();
		$.post("/phrases", $(this).serialize())
			.done(function(res){
				getDinos();
				$("#new-dino-form")[0].reset();
			});
	});
});

function getDinos(){
	$.get("/phrases", function(res){
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
	// append dinos to ul
	$("#dino-ul").append(dinoItems);
};

function deleteDino(extinct) {
	var dinoId = $(extinct).data()._id;
	$.ajax({
		url: '/phrases/' + dinoId,
		type: 'DELETE',
		success: function(res) {
			getDinos();
		}
	});
}