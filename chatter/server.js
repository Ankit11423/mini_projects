var http = require('http');

var server = http.createServer(function (req,res){
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.writeHead(200, {'Content-Type':'text/html'})
	res.end('Hello World');
});

console.log("Running");

server.listen(5000);