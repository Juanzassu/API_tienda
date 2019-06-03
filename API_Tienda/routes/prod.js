var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Productos = require('../models/Producto');

/*Consulta con GET*/

router.get('/', function(req,res,next){
	Productos.find({}, function(err,datos){
		res.status(200).json(datos);
	});
});
/*
router.get('/surtemela/' + Productos.item_id,function(req,res,next){
		Productos.findOne(
		{item_id: prod.item_id},
		{item_id: 1, item_name: 1, item_unPrice: 1, item_code: 1, item_imgurl: 1, item_desc: 1},
		function(err,datos){
			res.status(200).json(datos);
		}
	);
});
*/

/*Nuevo producto*/

/*
router.post('/surtemela/' + Productos.item_id, function(req,res,next){
	Productos.find({}, function(err,datos){ 
		res.status(404).json(datos);
	});
});
*/
router.post('/', function(req,res,next){
	console.log(req.body);
	var prod = Productos({
		item_id: req.body.item_id,
		item_name: req.body.item_name,
		item_unPrice: req.body.item_unPrice,
		item_code: req.body.item_code,
		item_imgurl: req.body.item_imgurl,
		item_desc: req.body.item_desc
	});

	prod.save(function(err,data){
		if(err){
			res.send('error');
		}else {
			res.send(data);
		}
	});

	Productos.find({}, function(err,datos){
		res.status(201).json(datos);
	});

});

/*PUT Producto*/

/*Elemento especifico*/

//router.PUT('/surtemela/' + Productos.item_id)

/*Elimina Producto*/

/*router.delete('/surtemela', function(req, res, next){
	console.log(req.body);
	var elim = Productos({
		item_id: req.body.item_id
	});

	prod.(function(err,data){
		if(err){
			res.send('error 404');
		}else {
			res.send(data);
		}
	});
});
*/
module.exports = router;