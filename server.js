var fs = require('fs');
var https = require('https');
var app = require('express')();
var options = {
   key  : fs.readFileSync('/root/server.key'),
   cert : fs.readFileSync('/root/adarshjayakumar_me.crt')
};

app.get('/', function (req, res) {
   res.send('Hello World!');
});

https.createServer(options, app).listen(8000,function () {
   console.log('Started!');
});
