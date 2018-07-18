var express = require('express')
var router = express.Router()
var User = require('../models/user')
var handler = require('../handler')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
var AES = require('gibberish-aes/src/gibberish-aes.js')

var aesSecret = (process.env.AES_SECRET || require('../private').aesSecret)
var aesPass = (process.env.AES_PASS || require('../private').aesPass)
AES.size(128)

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/loginpage', function (req, res) {
  res.json({ data: 'login page' })
})

router.post('/registerpage', function (req, res) {
  res.json({ data: 'register page' })
})

router.post('/register', function (req, res) {
  var name = req.body.name
  var email = req.body.email
  var newUsername = req.body.username
  var password = req.body.password
  var password2 = req.body.password2

  req.checkBody('name', 'Name is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'Email is not valid').isEmail()
  req.checkBody('username', 'Username is required').notEmpty()
  req.checkBody('password', 'Password is required').notEmpty()
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password)

  var errors = req.validationErrors()

  if (errors) {
    console.log('error in creating user')
    console.log(errors)
  } else {
    var newUser = new User({
      name: name,
      email: email,
      paymentStripe: '',
      paymentPaypal: '',
      pastOrders: [],
      address: '',
      username: newUsername,
      password: password,
      token: ''
    })

    User.getUserByEmail(email, function (err, user) {
      if (err) {
        handler(err)
      }
      if (user) {
        console.log('Email ' + email + ' already in use')
      } else {
        User.getUserByUsername(newUsername, function (err, user) {
          if (err) {
            handler(err)
          }
          if (user) {
            console.log('Username ' + newUsername + ' already in use')
          } else {
            User.createUser(newUser, function (err, user) {
              if (err) {
                throw err
              } else {
                console.log('User ' + newUsername + ' created')
                res.json({
                  token: newToken,
                  signinSuccess: true
                })
                // EmailSystem.confirmSignup(newUser, function(err, user){
                // })
              }
            })
          }
        })
      }
    })
  }
})

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//    User.getUserByUsername(username, function(err, user){
//    	if(err) throw err
//    	if(!user){
//    		return done(null, false, {message: 'Unknown User'})
//    	}

//    	User.comparePassword(password, user.password, function(err, isMatch){
//    		if(err) throw err
//    		if(isMatch){
//    			return done(null, user)
//    		} else {
//    			return done(null, false, {message: 'Invalid password'})
//    		}
//    	})
//    })
//   }))

module.exports = router
