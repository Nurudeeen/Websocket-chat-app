var express = require('express');
var app = express();
var socket= require('socket.io');
var cors = require('cors');

var server = app.listen(3000, function(){
    console.log('App listening on port 3000');
});

app.use(express.static('public'));
app.use(cors());

var io = socket(server);
io.on('connection', function(socket){
console.log('succesfully connected', socket.id)

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });
 // Handle typing event
 socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
});

});