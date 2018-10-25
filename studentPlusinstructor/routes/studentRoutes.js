var express = require('express');
var router = express.Router();

router.get('/my-account', function(req, res) {
  res.render('myaccountStudent');
});



module.exports = router;
