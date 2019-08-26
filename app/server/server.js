var express = require('express');
var app = express();
var fs = require('fs');

app.get('/locations',function(req, res){
fs.readFile(__dirname+"/"+"locations.json",'utf8', function(err, data){
    console.log(data);
    res.end(data);
});
})

var server = app.listen(8081,"127.0.0.1", function(){
var host = server.address().address;
var port = server.address().port;
console.log(host);
console.log("Example app listening at http://%s:%s", host, port);
})