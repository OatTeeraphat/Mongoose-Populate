//base path dir
global.__base = __dirname + '/';
var config = require(__base + 'mongo_config');

// set up ======================================================================
var express  = require('express');
var app      = express();
var port 	 = process.env.PORT || config.host.PORT;
//var mongoose = require('mongoose');
//var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');//use log activity.
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

// Make sure to include the JSX transpiler
require('node-jsx').install();

//var configDB = require('./config/database.js');

app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
});
// configuration ===============================================================
//var con = require('./mongocon.js')();

//var User     = require('./app/models/user');

//require('./config/passport')(passport); // js for config Passport

// Middle-ware Lib. ===============================================================
// set up our express application
app.use(morgan('dev')); // log every request to the console

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({// required for passport
	secret: process.env.SEESION_SECRET || 'oatlikeme',
	resave : false,
	saveUnintitialized : false,
	}
)); // session secret



//app.use(passport.initialize());
//app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages

// routes ======================================================================
//require('./app/routes.js')(app, passport); // load our routes configured passport
//require('./app/routes/core-route')(app);

//var request = require('request');

//request.get('http://104.199.171.234/');
//request.post('http://104.199.171.234/');



require('./app/routes/core-route')(app);
require('./app/routes/article-route')(app);
require('./app/routes/column-route')(app);
//require('./app/routes/user-route')(app);
require('./app/routes/publisher-route')(app);





// service ======================================================================
// for testAPI for our platfrom

//require('./app/service.js')(router);
//app.use('/api', router);

// launch ======================================================================
app.listen(port);
console.log('good@ localhost:' + port);
