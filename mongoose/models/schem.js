var mg = require('../index');

var Schema = new mg.Schema({
	name: {type: String}
});

var DB = mg.model('Schems', Schema);

module.exports = DB;