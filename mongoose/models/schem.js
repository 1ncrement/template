var mg = require('../index'),

	Schema = new mg.Schema({
		name: {type: String}
	}),
	
	DB = mg.model('Schems', Schema);

module.exports = DB;