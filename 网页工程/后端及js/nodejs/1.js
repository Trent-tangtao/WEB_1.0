var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('tangtao listen to you !\n');
}).listen(8888);
console.log('server running at 88888');


