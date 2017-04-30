var express = require('express')
var engine = require('ejs-locals')
var fs = require('fs')
var mongoose = require('mongoose')
var passport = require('passport')
var flash = require('connect-flash')
var morgan = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var http =  require('http')
var https = require('https')
var app = express()
var port = 6666;
var configDB = require('./config/database.js');

// Configuration ==================================
mongoose.connect(configDB.url);

//require('./config/passport')(passport);

//set up the application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.set('view engine','ejs');
app.use( express.static( "public" ) );


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
//// Configuration for SSL ===========================================//
// Staging SLL config
/*var options = {
   key  : fs.readFileSync('/root/server.key','utf8'),
   cert : fs.readFileSync('/root/adarshjayakumar_me.crt','utf8')
};*/
// Local SSL config
/////==================================================================//


var options = {
   key  : fs.readFileSync('key.pem'),
   cert : fs.readFileSync('cert.pem'),
   passphrase: 'XXXX'
};
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/stylesheet', express.static(__dirname + '/public/stylesheets')); // custom css
app.set('views',__dirname + '/views');
app.engine('ejs',engine);
app.set('view engine', 'ejs');


https.createServer(options, app).listen(9011)


//// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



