var app = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var http =  require('http');
var https = require('https');
var options = {
   key  : fs.readFileSync('/root/server.key'),
   cert : fs.readFileSync('/root/adarshjayakumar_me.crt')
};
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', function (req, res) {
   res.render('views/index.ejs');
});

app.get('/dummy',function(req,res){
   res.write("Dummy Yummy");
});
https.createServer(options, app).listen(8000,'127.0.0.1');
});
