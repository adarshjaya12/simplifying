var express = require('express')
var fs = require('fs')
var http =  require('http')
var https = require('https')
var app = express()
var options = {
   key  : fs.readFileSync('/root/server.key','utf8'),
   cert : fs.readFileSync('/root/adarshjayakumar_me.crt','utf8')
};

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


https.createServer(options, app)
http.createServer(app)

app.listen(9011,function(){
	app.get('/', function (req, res) {
   		res.render('index');
	});

	app.get('/dummy',function(req,res){
   		res.write("Dummy Yummy");
	});
})


app.listen(5091,function(){
	app.get('/',function(req,res){
		res.write('From 5991');
	});
})
