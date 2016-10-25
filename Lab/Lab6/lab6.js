var fs = require("fs");
var file = "lab6.html";

var fileToString = function(fileName){
    var fileText;
    fileText = fs.readFileSync(fileName, "utf8");
    return fileText;
}

console.log(fileToString(file));

var http = require("http");
var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html "});
    response.write(fileToString(file));
    response.end();
});
server.listen(8000);