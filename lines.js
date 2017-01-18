const through = require('through2');
const split = require('split');

var transformStream = through(transformFunction, flushFunction);

process.stdin.pipe(split()).pipe(transformStream).pipe(process.stdout);

var count = 0;
function transformFunction(buffer, encoding, next) {
	var line = buffer.toString();
	if (count % 2) {
        this.push(line.toUpperCase() + '\n');
    }
    else {
        this.push(line.toLowerCase() + '\n');
    }
    // count = count + 1
    count++
	next();
}

// called when the stream is closed
function flushFunction(done) {
	done();
}
