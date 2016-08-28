/**
 * Created by increment on 25.08.16.
 */
var comentsCtrl = {},
	comentsSchema = require('../mongoose/models/comentsSchem'),
	statusError = require('status-errors');

comentsCtrl.get = (req, res, next) => {
	comentsSchema.find({})
		.then((data)=> {
			res.json(data)
		})
		.catch((err)=>res.json(err));
};

comentsCtrl.add = (req, res, next) => {
	var body = req.body,

		coment = new comentsSchema({
			text: body.text
		});

	coment.save()
		.then((data)=> {
			res.json(data)
		})
		.catch((err)=>res.json(err));
};

comentsCtrl.remove = (req, res, next) => {
	var body = req.body;

	comentsSchema.remove({"_id": body.id})
		.then((data)=> {
			res.json(data)
		})
		.catch((err)=>res.json(err));
};

module.exports = comentsCtrl;