const through = require('through2');

// through2([ options, ] [ transformFunction ] [, flushFunction ])
var transformStream = through(transformFunction, flushFunction);

process.stdin.pipe(transformStream).pipe(process.stdout);

function transformFunction(buffer, encoding, next) {

	this.push(buffer.toString().toUpperCase());
	// call the callback function (next) to indicate that the transformation is done
	next();
}

// called when the stream is closed
function flushFunction(done) {
	// this.push('DONE');
	done();
}
