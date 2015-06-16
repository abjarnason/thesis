process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var WebSocket = require('ws');
var log = require('npmlog');

log.level = 'verbose';

var sockets = [];
var maxSockets = 5000;
var connectionAttempts = 0;

function connectToWebSocket() {
	connectionAttempts++;

	var socket = {};

	var ws;

  (function() {
      ws = new WebSocket('https://localhost:5000/json');
  })();

  ws.on('open', function() {
	    log.info('Connected: ' + connectionAttempts);
	});

	ws.on('error', function() {
	    log.error('Error: ' + connectionAttempts);
	});

	ws.on('close', function() {
	    log.warn('Closed: ' + connectionAttempts);
	});

  sockets.push(ws);

	if (connectionAttempts < maxSockets) {
    setTimeout(connectToWebSocket, 2000);
  }

};

connectToWebSocket();
