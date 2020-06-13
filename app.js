var http = require ("http");
var url = require ("url");
var fs = require ("fs");
var file = 'list_view.html';




http.createServer (function (request, response) {

    var url_parts = url.parse (request.url, true); 

    if (url_parts.pathname.startsWith('/images/')){
        var name=url_parts.pathname
        name=name.replace('/images','images');
        fs.readFile( name, function( err, data ) {
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

                response.write(data); 
                response.end();
          
    });
    } 
     else{

        if(url_parts.pathname.startsWith('/form')){
            fs.stat('form.html', function (err,stats) {
                if (err == null) { 
                    fs.readFile ('form.html', function (err, data) {
                      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
                      response.write(data); 
                      response.end();
                    });
                }
                else { 
                    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
                    response.write('The ' + file + ' file does not exist');
                    response.end();
                } 
              }); 
        }
        else{

        fs.stat(file, function (err,stats) {
          if (err == null) { 
              fs.readFile (file, function (err, data) {
                response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
                response.write(data); 
                response.end();
              });
          }
          else { 
              response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
              response.write('The ' + file + ' file does not exist');
              response.end();
          } 
        }); 
    }
}
}).listen(8070);
console.log("The server was started on port 8070");
console.log("To end the server, press 'CTRL + C'");
