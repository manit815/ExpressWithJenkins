var express = require ('express');

var app = new express();

app.get('/', function(req,res){
	res.send('Hello world');
});

app.listen(4000);
