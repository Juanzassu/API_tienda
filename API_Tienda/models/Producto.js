var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Producto = Schema({
	item_id:Number,
	item_name:String,
	item_unPrice:Number,
	item_code:String,
	item_imgurl:String,
	item_desc:String
});

module.exports = mongoose.model('Prd', Producto);