var express = require('express')
var engine = require('ejs-locals')
var fs = require('fs')
var http =  require('http')
var https = require('https')
var app = express()
var options = {
   key  : fs.readFileSync('/root/server.key','utf8'),
   cert : fs.readFileSync('/root/adarshjayakumar_me.crt','utf8')
};
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/stylesheet', express.static(__dirname + '/public/stylesheets')); // custom css
app.set('views',__dirname + '/views');
app.engine('ejs',engine);
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);


https.createServer(options, app)
http.createServer(app)

app.listen(9011,function(){
	app.get('/', function (req, res) {
   		res.render('index');
	});

	app.get('/login',function(req,res){
   		res.render('login');
	});
})


app.listen(5091,function(){
	app.get('/',function(req,res){
		res.write('From 5991');
	});
})
