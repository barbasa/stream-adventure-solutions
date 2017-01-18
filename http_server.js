const http = require('http');
const through = require('through2');


// http request and response objects are also streams
const listener = function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (buffer, encoding, next) {
            this.push(buffer.toString().toUpperCase());
            next();
        })).pipe(res);
    }
    else res.end('Request was not a POST!');
}

const server = http.createServer(listener);

server.listen(process.argv[2]);

// To test:
// node http_server.js 8000 &
// curl -XPOST -d'uppercaseme' http://localhost:8000
// > UPPERCASEME
// curl -XGET -d'uppercaseme' http://localhost:8000 
// > Request was not a POST!