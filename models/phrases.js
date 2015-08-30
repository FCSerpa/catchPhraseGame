var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var DinoSchema = new Schema ({
	name: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	}
})

var Dino = mongoose.model('Dino', DinoSchema);
module.exports = Dino;