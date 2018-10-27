var express = require('express');
var router = express.Router();

router.get('/my-profile', function(req, res) {
  res.render('instructorProfile');
});



module.exports = router;
