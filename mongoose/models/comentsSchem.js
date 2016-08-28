/**
 * Created by increment on 25.08.16.
 */
var mg = require('../index'),

	Coments = new mg.Schema({
		text: {type: String},
		date: {type: Date, default: Date.now}
	}),

	DB = mg.model('Coments', Coments);

module.exports = DB;