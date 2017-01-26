var http = require( "http" );
var fs = require( "fs" );
var stream = require( "stream" );

var httpServer = http.createServer(
    function handleRequest( request, response ) {

        // Read Buffer -> 10 bytes
        var producer = fs.createReadStream( "./resources/high_resolution_image.jpg", { highWaterMark: 10 * 1024  } );

        // Back-pressure effect:
        // - we are forcing the PassThrough buffer to fill up by:
        // -- forcing a small buffer
        // -- not piping it into anything else
        // - once the buffer is filled up, the stream create back-pressure and pauses the producer
        producer.pipe( new stream.PassThrough( { highWaterMark: 10 * 1024 } ));

        producer.pipe( response );
    }
);

httpServer.listen( 8080 );

console.log( "Server running on port 8080" );
