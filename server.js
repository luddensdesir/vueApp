var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var expressValidator = ('express-validator');
var passport = require('passport');
var local = require('passport-local');
var mongoose = require('mongoose');
var main = require('./routes/index');
var users = require('./routes/users');
var bodyParser = require('body-parser')

// var targetConnection  = require('./private').connection;

// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       

// mongoose.connect(targetConnection, options);

// var db = mongoose.connection;
var app = express();

// app.use(session({
//     secret: 'mySuperSecretSecret',
//     saveUninitialized: true,
//     resave: true
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//       var namespace = param.split('.')
//       , root    = namespace.shift()
//       , formParam = root;

//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));

// app.use(function (req, res, next) {
//   res.locals.user = req.user || null;
//   res.locals.loggedIn = false;
//   next();
// });

app.use('/api', main);
app.use('/api/users', users); 

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});