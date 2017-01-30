var trumpet = require('trumpet');
var through = require('through2');

// Main trumpet stream
var tr = trumpet();
// html in -> html out
process.stdin.pipe(tr).pipe(process.stdout);
  
var trumpetSelector = tr.select('.loud');

// Create a read stream out of the selected HTML
var loudHtmlReadStream = trumpetSelector.createReadStream();

// Uppercase selected HTML
var uppercasedStream = loudHtmlReadStream.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
}));
 
var loudHtmlWriteStream = trumpetSelector.createWriteStream();
// Trumpet will magically get the what will go into loudHtmlWriteStream and pipe it to tr write stream
uppercasedStream.pipe(loudHtmlWriteStream);

// Full explanation here: https://github.com/nodeschool/discussions/issues/346
