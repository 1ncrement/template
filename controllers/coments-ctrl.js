/**
 * Created by increment on 25.08.16.
 */
let comentsCtrl = {},
	comentsSchema = require('../mongoose/models/comentsSchem'),
	statusError = require('status-errors');

comentsCtrl.get = (req, res, next) => {
	comentsSchema.find({})
		.then((data)=>{res.json(data)})
		.catch((err)=>res.json(err));
};

comentsCtrl.add = (req, res, next) => {
	let body = req.body;

	let coment = new comentsSchema({
		text: body.text
	});

	coment.save()
		.then((data)=>{res.json(data)})
		.catch((err)=>res.json(err));
};

comentsCtrl.remove = (req, res, next) => {
	let body = req.body;

	comentsSchema.remove({"_id": body.id})
		.then((data)=>{res.json(data)})
		.catch((err)=>res.json(err));
};

module.exports = comentsCtrl;