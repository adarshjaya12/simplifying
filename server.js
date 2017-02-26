const express = require('express')
const fs = require('fs')
const crypto = require('crypto')
const bodyParser = require('body-parser')
const https = require('https')
const http = require('http')
const app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
var db
var options = {
    key: fs.readFileSync('/path/to/key.pem'),
    cert: fs.readFileSync('/path/to/cert.cert')
};

https.createserver(options,function(req,res){
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8080);

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://adarshjaya12:Ad9940114541@ds161179.mlab.com:61179/resumingly',function(err,database){
	if(err) return console.log(err)
	db = database;
	app.listen(8080,function(){
		console.log('Listening on 8080 )
	})

})

app.listen(8080,function(){
app.get('/',function(req,res)
	{

	})
app.get('/',function(req,res)

	{
		db.collection('quotes').find().toArray(function(err,result){
			if(err) return console.log(err)
			res.render('index.ejs',{quotes:result})
			})
			
	})
app.post('/quotes',function(req,res)
	{
		db.collection('quotes').save(req.body,function(err,result){
			if(err) return console.log(err)
			console.log('saved to database')
			res.redirect('/')		
		})
		db.collection('quotes').find().toArray(function(err,results){
			console.log(results)
		})
		
	})
})
