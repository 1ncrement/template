/**
 * Created by increment on 23.08.16.
 */
var express = require('express'),
	path = require('path'),
	router = express.Router(),
	todoCtrl = require('../controllers/main-ctrl'),
	comentsCtrl = require('../controllers/coments-ctrl');

router.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/coments/get', comentsCtrl.get);
router.post('/coments/add', comentsCtrl.add);
router.post('/coments/remove', comentsCtrl.remove);

module.exports = router;