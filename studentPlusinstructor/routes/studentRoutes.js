var express = require('express');
var router = express.Router();

router.get('/my-account', function(req, res) {
  res.render('myaccountStudent');
});

router.get('/registerInstructor', function(req, res) {
  res.render('registerInstructor');
});


module.exports = router;
