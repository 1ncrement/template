var mg = require('mongoose'),
	path = require('path'),
	config = require('../config');

mg.Promise = global.Promise;//костыль

mg.connect(config.mongoose.uri);

module.exports = mg;