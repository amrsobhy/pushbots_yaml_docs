var express = require('express');
var path = require('path');
var app = express();


app.use(express.static('public'))

app.get('/v1', function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'v1.html'));
})


app.get('/v2', function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'v2.html'));
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'v1.html'));
})



app.listen(8080)
console.log("localhost:8080")