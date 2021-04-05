var express = require('express');

//App setup
var app = express();
var server = app.listen(8000, function(){
    console.log('Listening to request on port 8000');
});

//Static files
app.use(express.static('public'));