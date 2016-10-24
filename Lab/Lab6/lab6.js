var fs = require("fs");
var temp = fs.readFile("lab6.html", "utf8", function(error, text){
    if(error)
	throw error;
    return console.log("The file contained:", text);    

//    return text;

});
fs.readFile("lab6.html", function(error, buffer){
    if(error)
	throw error;
//    console.log("The file contained", buffer.length, "bytes.", "The first byte is:", buffer[0]);
});


//temp;
var http = require("http");
var server = http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(temp);
    response.end();
});
server.listen(8000);

