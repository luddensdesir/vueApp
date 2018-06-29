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
 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});
 
app.get('/static/css/app.a93dce200da88d098e72adee041ea7f8.css', function(req, res){
  res.sendFile(__dirname + '/dist/static/css/app.a93dce200da88d098e72adee041ea7f8.css');
});

app.get('/static/js/manifest.2ae2e69a05c33dfc65f8.js', function(req, res){
  res.sendFile(__dirname + '/dist/static/js/manifest.2ae2e69a05c33dfc65f8.js');
});

app.get('/static/js/app.2b7fd02aedafb01c79c6.js', function(req, res){
  res.sendFile(__dirname + '/dist/static/js/app.2b7fd02aedafb01c79c6.js');
});
 
app.get('/static/js/vendor.48f0184bc7362669353c.js', function(req, res){
  res.sendFile(__dirname + '/dist/static/js/vendor.48f0184bc7362669353c.js');
});

app.get('/static/img/1.998d592.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/1.998d592.jpg');
});

app.get('/static/img/2.00c29d6.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/2.00c29d6.jpg');
});

app.get('/static/img/4.2bd80a4.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/4.2bd80a4.jpg');
});

app.get('/static/img/5.e629105.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/5.e629105.jpg');
});

app.get('/static/img/6.bdfd13b.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/6.bdfd13b.jpg');
});

app.get('/static/img/8.38ed1dc.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/8.38ed1dc.jpg');
});

app.get('/static/img/7.db4a07b.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/7.db4a07b.jpg');
});

app.get('/static/img/3.9d02dcd.jpg', function(req, res){
  res.sendFile(__dirname + '/dist/static/img/3.9d02dcd.jpg');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', main);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});