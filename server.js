//base path dir
//test mongoose
global.__base = __dirname + '/';
var config = require(__base + 'config');

// set up ======================================================================
var express  = require('express');
var app      = express();
var port 	 = process.env.PORT || config.host.PORT;
//var mongoose = require('mongoose');

var morgan       = require('morgan');//use log activity.
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
//var session      = require('express-session');

//var router = express.Router(); // ROUTES FOR OUR API

// configuration ===============================================================
var con 	 = require('./mongocon.js')();
//var user     = require('./app/models/mock.js');

// Middle-ware Lib. ===============================================================
// set up our express application
//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

//app.set('view engine', 'ejs'); // set up ejs for templating

// service ======================================================================
// for testAPI for our platfrom
require('./app/test-route.js')(app);
//require('./app/route/service.js')(router);
//app.use('/', router);
// launch ======================================================================
app.listen(port);
console.log('testMongoose @ localhost:' + port);
