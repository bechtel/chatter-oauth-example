var request = require('request');
var express = require('express')
var app = express.createServer();

var clientid = ''
var clientsecret = ''
var callbackurl = 'https%3A%2F%2Fmydomain%2Fcallback'

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});


app.get('/', function(req, res){
	res.redirect('https://bechtel.my.salesforce.com/services/oauth2/authorize?response_type=code&client_id=' + clientid + '&type=web_server&redirect_uri=' + callbackurl);
});

app.get('/callback', function(req, res){
	
	request.post({
	        headers: {'content-type' : 'application/x-www-form-urlencoded'},
	        url: 'https://bechtel.my.salesforce.com/services/oauth2/token',
	         body: "code=" + req.param('code', null) + "&grant_type=authorization_code&client_id=" + clientid + "&client_secret=" + clientsecret + "&redirect_uri=" + callbackurl
	         }, function(error, response, body){
				res.send(body);
	    });
	
});

app.listen(4567);
console.log('app started on port 4567');