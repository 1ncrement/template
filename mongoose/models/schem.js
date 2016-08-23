let mg = require('../index');

let Schema = new mg.Schema({
	name: {type: String}
});

let DB = mg.model('Schems', Schema);

module.exports = DB;