/**
 * Created by increment on 25.08.16.
 */
let mg = require('../index');

let Coments = new mg.Schema({
	text: {type: String},
	date: {type: Date, default: Date.now}
});

let DB = mg.model('Coments', Coments);

module.exports = DB;