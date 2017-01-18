const request = require('request');
const postRequestStream = request.post('http://localhost:8099');
process.stdin.pipe(postRequestStream).pipe(process.stdout);