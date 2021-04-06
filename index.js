var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(8000, function(){
    console.log('Listening to request on port 8000');
});

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', (socket) => {
    console.log('Made socket connection', socket.id);
    socket.on('chat', function(data){
        //Send to the different clients
        io.sockets.emit('chat', data);
    });
});