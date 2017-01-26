var http = require( "http" );
var fs = require( "fs" );
var stream = require( "stream" );

var httpServer = http.createServer(
    function handleRequest( request, response ) {

        // Read Buffer -> 10 bytes
        var slowProducer = fs.createReadStream( "./resources/high_resolution_image.jpg", { highWaterMark: 10  } );

        // default highWaterMark -> 10kb
        slowProducer.pipe( response );
    }
);

httpServer.listen( 8080 );

console.log( "Server running on port 8080" );
