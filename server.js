var express = require('express');
var path = require('path');
 
var cookieParser = require('cookie-parser');
var expressValidator = ('express-validator');
var passport = require('passport');
var local = require('passport-local');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var main = require('./routes/index');
var users = require('./routes/users');

// var targetConnection  = require('./private').connection;
// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
// mongoose.connect(targetConnection, options);
// var db = mongoose.connection;

var app = express();

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', main);
app.use('/api/users', users); 

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});