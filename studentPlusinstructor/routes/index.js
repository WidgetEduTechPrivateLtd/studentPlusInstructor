var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController.js');
/* GET home page. */
router.get('/',  indexController.home_get );

router.get('/login', indexController.login_get );

router.post('/login', indexController.login_post);

router.get('/register', indexController.register_get);

router.post('/newUserRegister', indexController.newUserRegister_post);

router.get('/courses', indexController.courseStructure);

//router.get('/settings', indexController.settings);

router.get('/logout', indexController.logout);

router.get('/ping', indexController.ping);

module.exports = router;
