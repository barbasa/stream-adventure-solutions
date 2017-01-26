var http = require( "http" );
var fs = require( "fs" );

var httpServer = http.createServer(
    function handleRequest( request, response ) {

        var producer1 = fs.createReadStream( "./resources/high_resolution_image.jpg" );
        var producer2 = fs.createReadStream( "./resources/high_resolution_image_2.jpg" );

        producer1.pipe( response );
        producer2.pipe( response );
    }
);

httpServer.listen( 8080 );

console.log( "Server running on port 8080" );
