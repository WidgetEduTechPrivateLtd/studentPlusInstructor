var user = require('../models/user.js');
var student = require('../models/student.js');
var instructor = require('../models/instructor.js');
var location = require('../models/location.js');
var passport = require("passport");
var ValidateUserSchema = require("../models/validateuser");
var nodemailer = require("nodemailer");
var mongoose = require("mongoose");

var transporter = nodemailer.createTransport({
  // example with google mail service
  host: 'stmp.gmail.com',
  port: 587,
  secure: false, //true for 465, false for other ports
  auth: {
    user: 'shreyanshdixit.2412@gmail.com',
    pass: 'c2T1$MSfOnOcV89Zl8Y@'
  }
});

function randomString(){
  var chars = "01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 8;
  var randomString = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum+1);
  }
  return randomstring;
};

function sendEmailValidate(email, validateString)
{
  console.log(email);
  var mailOptions = {
    from: 'nikerocking@gmail.com',
    to: email,
    subject: 'Email Verification - WidgetEduTech',
    /*
       for plain text body
  	 ->	text: 'Just Testing!'
    */

    // html body
    html: 'The mail has been sent from Node.js application! '+validateString+'</p>'
  };

transporter.sendMail(mailOptions, (error, info) => {
  if (error)
  {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
var validateUserSchema = {email: email, validationKey: validateString};

ValidateUserSchema.create({email: email, validationKey: validateString}, function(err, newlyCreated){
  if(err){
    console.log(err);
  }
});
};



//home route
exports.home_get= function(req, res) {
  res.render('home');
};
//login page
exports.login_get = function(req, res) {
  res.render('login');
};
//register page
exports.register_get = function(req, res) {
  res.render('register');
};

exports.newUserRegister_post = function(req, res){
  var newUser = new user(
    {
      email: req.body.emailConfirm,
      userType: "student",
      emailValid: false
  });
  /*var newStudent = new student(
    {
      user: newUser._id,
      fullName: req.body.fullName,
      mobileNumber: req.body.mobileNumber
    }
  );*/
  user.register(newUser.email, req.body.password, function(err, user){
    if(err){
      console.log(err);
      res.flash('error', {error: error.message});
      res.redirect('/register');
    }
    passport.authenticate("local")(req, res, function(){
      sendEmailValidate(req.body.email, randomString());

      req.flash("success", "Successfully registered! Nice to meet you "+ req.body.email);
      res.redirect("/");
    });
  });
};

exports.login_post = function(req, res) {
  passport.authenticate("local", {failureRedirect: '/login' });
  var foundUser = user.findOne({email: req.body.email}).populate("foundUser").exec(function(err, foundUser){
    if(err || !foundUser){
      console.log(err);
      req.flash('error', 'Sorry, No user exists with email '+req.params.email);
      req.redirect('/login');
    }
    req.flash("success", "Hi User "+foundUser.email);
    res.redirect("/");
  });
};

exports.courseStructure = function(req, res) {
  res.render('courseStructure');
};



exports.logout = function(req,res){
  req.logout();
  req.flash("Success", "see you later!");
  res.redirect("/");
};
//ping-pong
exports.ping = function(req, res) {
  res.status(200).send("pong!");
};
