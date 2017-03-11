var app = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var https = require('https');
var options = {
   key  : fs.readFileSync('/root/server.key'),
   cert : fs.readFileSync('/root/adarshjayakumar_me.crt')
};
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', function (req, res) {
   res.render('index.ejs');
});

https.createServer(options, app).listen(process.env.PORT || 8000,function () {
   console.log('Started!');
});
