var express = require('express');
var path = require('path');
 
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator'); 

var passport = require('passport');
var local = require('passport-local');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var main = require('./routes/index');
var users = require('./routes/users');
var checkout = require('./routes/checkout');

var targetConnection = (process.env.MONGODB_URI || require('./private').connection);

console.log("targetConnection")
console.log(targetConnection)

var options = { 
          keepAlive: 300000, 
          connectTimeoutMS: 30000 
        }

mongoose.connect(targetConnection, options);

var db = mongoose.connection;

// app.use(session({
//   secret: 'mySuperSecretSecret',
//   saveUninitialized: true,
//   resave: true
// }));
 
// app.use(cookieParser());

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function (req, res, next) {
//   res.locals.user = req.user || null;
//   res.locals.loggedIn = false;
//   //get session info about wether user is logged in here
//   next();
// });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/', main);
app.use('/users', users); 
app.use('/checkout', checkout); 

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server getting turned up on '+app.get('port'));
});