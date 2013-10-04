var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello, new prototype!');
});

var port = process.env.PORT || 5000;
app.listen(port);
