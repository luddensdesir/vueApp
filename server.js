var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator'); 
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var morgan = require('morgan')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var main = require('./routes/index');
var users = require('./routes/users');
var menu = require('./routes/menu');
var checkout = require('./routes/checkout');
var cors = require('cors')
var privateData 

try{
  privateData = require('./private')
} catch(ex) {
  console.log('private keys not found using env')
}

var targetConnection = (process.env.MONGODB_URI || privateData.connection);

var dev = process.env.NODE_ENV === 'dev'

console.log("targetConnection")
console.log(targetConnection)

var options = { keepAlive: 300000, connectTimeoutMS: 30000, autoIndex:false }

let dbConnection = mongoose.connect(targetConnection, options, function(err, db){
  // console.log(db)
  // db.createCollection('MenuItem')
  // console.log(db.collections.users.conn)
})

// var allowCrossDomain = function(req, res, next) {
//   // res.header('Access-Control-Allow-Origin', '*');
//   // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   // res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }

var db = mongoose.connection;

var app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(session({
  secret: 'mySuperSecretSecret',
  saveUninitialized: true,
  resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


if(dev){
  // app.use(allowCrossDomain)
  console.log('---CORS ENABLED--- ' + dev)
  app.use(cors())

  // app.get('/', function(res, req){
  // });
}

app.get('/', function (req, res) { 
  //for the initial connect. i really hate webpack proxy
  console.log('__!!getting index!!__')
  res.sendFile(path.join(__dirname + '/app/index.html'));
})

//for serving images and the client side javascript
app.use(express.static(path.join(__dirname, 'app')));

app.use(passport.initialize());
app.use(passport.session());

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

app.use(function (req, res, next) {
 res.locals.user = req.user || null;
 res.locals.loggedIn = false;
 next();
});
app.use(cors())


// app.use('/', main);
app.use('/menu', menu); 
app.use('/users', users); 
app.use('/checkout', checkout); 

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server getting turned up on '+app.get('port'));
});