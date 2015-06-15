// var WebSocketServer = require('ws').Server;
// var wss = new WebSocketServer({
//   port: 8080
// });

var engine = require('engine.io');
var http = require('http').createServer().listen(8080);
var server = engine.attach(http);

server.on('connection', function connection(ws) {
  console.log('connection established');

  ws.on('message', function incoming(message) {

    if (typeof message === 'string') {

      console.log('received a random string of length %d', message.length);
      ws.send('acknowledgement');
      console.log('sent: %s', 'acknowledgement');

    } else if (Buffer.isBuffer(message)) {

      console.log('received %d bytes of random binary data', message.length);
      ws.send('acknowledgement');
      console.log('sent: %s', 'acknowledgement');

    }

  });
});
