var express = require('express');
var app = express();
var path = require('path');
var request = require('request');


// start quandl api //

	url = 'https://www.quandl.com/api/v1/datasets/SEC/AAPL_ASSETS_Q.json';

	// request(url, function(error, response, body){
	// 	console.log(body);
	// });

// end quandl api //































app.use(express.static(__dirname + '/public'));

app.listen(8001)
console.log("server working on port 8001")