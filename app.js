const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => {
  socket.emit('request', /* … */ ); // emit an event to the socket
  io.emit('broadcast', /* … */ ); // emit an event to all connected sockets
  socket.on('reply', () => {
    /* … */
  }); // listen to the event
  /* … */
});
server.listen(3000);
console.log('ws server running');