var express = require('express')
var router = express.Router()
var User = require('../models/user')
var Menu = require('../models/menu')
var handler = require('../handler')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
var AES = require('gibberish-aes/src/gibberish-aes.js')

var jwtSecret = (process.env.JWT_SECRET || require('../private').jwtSecret)
var aesPass = (process.env.AES_PASS || require('../private').aesPass)
AES.size(128)

var jwtExpire = '50m'

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
      if (err) { handler(err) }

      if (user) {
        console.log('Email ' + email + ' already in use')
      } else {
        User.getUserByUsername(newUsername, function (err, user) {
          if (err) { handler(err) }

          if (user) {
            console.log('Username ' + newUsername + ' already in use')
          } else {
            User.createUser(newUser, function (err, user) {
              // this currently allows user to be created without token
              if (err) {
                throw err
              } else {
                var encoded = newUser.username
                encoded = AES.enc(encoded, aesPass)
                user.token = encodeToken(user._id)
                var token = jwt.sign({name: encoded}, jwtSecret, {
                  expiresIn: jwtExpire
                })

                console.log(token)
                res.json({
                  token: token,
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

router.post('/update', function (req, res) {
  console.log(req.body)
  decodeToken(req.body.token).then(result => {
    req.body.userID = result.id
    User.updateUserInfo(req.body.userID, req.body.newUserInfo, function (err, user) {
      if (err) { console.log(err) }
      console.log(user)
    })
    res.end()
  })
})

// passport.use(new LocalStrategy(
//   function (username, password, done) {
//     User.getUserByUsername(username, function (err, user) {
//       if (err) throw err
//       if (!user) {
//         return done(null, false, {message: 'Unknown User'})
//       }

//       User.comparePassword(password, user.password, function (err, isMatch) {
//         if (err) throw err
//         if (isMatch) {
//           return done(null, user)
//         } else {
//           return done(null, false, {message: 'Invalid password'})
//         }
//       })
//     })
//   }))

// passport.serializeUser(function (user, done) {
//   done(null, user.id)
// })

// passport.deserializeUser(function (id, done) {
//   User.getUserById(id, function (err, user) {
//     done(err, user)
//   })
// })

const encodeToken = function (items) {
  var encoded = items
  console.log('Encode Token')
  console.log(encoded)
  encoded = AES.enc(encoded, aesPass)
  console.log(encoded)
  return jwt.sign({content: encoded}, jwtSecret, {
    expiresIn: jwtExpire
  })
}

async function decodeToken (token) {
  console.log('Decode token: ')
  return new Promise(resolve => {
    jwt.verify(token, jwtSecret, function (err, decoded) {
      if (err) {
        console.log(err)
      }
      var id
      if (err) { console.log(err) }
      id = AES.dec(decoded.content, aesPass)
      resolve({
        id: id
      })
    })
  })
}

router.post('/login',
  // passport.authenticate('local'),
  function (req, res) {
    User.getUserByUsername(req.body.username, function (err, user) {
      // console.log(user)
      if (err) {
        console.log(user.username + ' login failure.')
        res.status(403)
      } else {
        if (user != null) {
          user.token = encodeToken(user._id)
          User.updateUserToken(user._id, user.token)

          console.log(user.username + ' login success.')
          res.json({
            token: user.token
          })
        } else {
          console.log('Invalid user, try logging in')
          res.status(404)
        }
      }
    })
    // res.end()
  })

// router.post('/logout/:id', function (req, res) {
//   // User.getUserById(req.params.id, function(err, user){
//   // console.log(req.body.token)
//   //check if stored token matches req.body.token, then remove
//   User.cancelToken(req.params.id, '', req.body.token, function (error, NEWUSER) {
//   })
//   // })
//   // clear the login info screen
//   console.log('Logging Out')
//   res.json({logoutSuccess: true})
// })

router.use(function (req, res, next) {
  var token = req.headers.token
  console.log(req.headers)
  if (token) {
    decodeToken(token).then(result => {
      console.log('User ID')
      req.body.userID = result.id
      next()
    })
  } else {
    console.log('Token Not Submitted')
    //invalid token somehow, failed login
    // res.status(403).json({loginSuccess: false})
  }
})

router.post('/preauth', function (req, res) {
  var userID = req.body.userID

  //error when token not used in a long time?

  console.log('decoded')
  console.log(userID)
  User.getUserById(userID, function (err, user) {
    if (err) {
      console.log(user.username + ' preauth failure.')
      throw err
    } else {
      if (user != null) {
        if (req.body.token === user.token) {
          console.log(user.username + ' preauth success.')
          res.json({
            preauthSuccess: true
          })
        } else {
          console.log('User logged out, try logging back in.')
          res.json({
            preauthSuccess: false
          })
        }
      } else {
        console.log('Invalid user, try logging in')
        res.json({
          preauthSuccess: false
        })
      }
    }
  })
})

router.get('/pastOrders', function (req, res) {
  console.log('pastOrders')
  User.getUserById(req.body.userID, function (err, user) {
    res.json(Menu.matchPastOrders(user.pastOrders))
  })
})

module.exports = router
