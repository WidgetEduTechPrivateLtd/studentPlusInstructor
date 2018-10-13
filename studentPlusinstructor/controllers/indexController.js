var user = require('../models/user.js');
var student = require('../models/student.js');
var instructor = require('../models/instructor.js');
var location = require('../models/location.js');


exports.home_get= function(req, res) {
  res.render('home');
};

exports.login_get = function(req, res) {
  res.render('login');
};

exports.register_get = function(req, res) {
  res.render('register');
};

exports.register_post = function(req, res){};

exports.login_post = function(req, res) {};

exports.courseStructure = function(req, res) {
  res.render('courseStructure');
};

exports.profile = function(req, res) {
 res.render('profile');
};

exports.ping = function(req, res) {
  res.status(200).send("pong!");
};
