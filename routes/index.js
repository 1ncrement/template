/**
 * Created by increment on 23.08.16.
 */
var express = require('express'),
	path = require('path'),
	router = express.Router(),
	todoCtrl = require('../controllers/main-ctrl');

router.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;