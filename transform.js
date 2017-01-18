const through = require('through2');

var transformStream = through(writeFunction, endFunction);

process.stdin.pipe(transformStream).pipe(process.stdout);

function writeFunction(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

function endFunction(done) {
	// this.push('DONE');
	done();
}
