const fs = require('fs');

const inputFile = process.argv[2];

fs.createReadStream(inputFile).pipe(process.stdout);