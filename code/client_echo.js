// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//
// var WebSocket = require('ws');
// var ws = new WebSocket('ws://localhost:8080/');
var crypto = require('crypto');
var ws = require('engine.io-client')('ws://localhost:8080');

var timeout = 2000;

ws.on('open', function open() {
  console.log('connected established\n');
  console.log('timeout:', timeout);

  if (Math.random() >= 0.5) {
    # random text
    var random = crypto.randomBytes(Math.floor((Math.random() * 100)) + 1).toString('hex');
    ws.send(random, function() {
      console.log('sent a random string of length %s', random.length);
    });
  } else {
    # random binary
    var random = crypto.randomBytes(Math.floor((Math.random() * 1024)) + 1);
    ws.send(randomBytes, {
      binary: true,
      mask: true
    }, function() {
      console.log('sent %d bytes of random binary data', randomBytes.length);
    });
  }


});

ws.on('message', function incomming(message) {
  console.log('received: %s', message);
  console.log('\n');
  setTimeout(function() {
    console.log('timeout:', timeout);

    if (Math.random() >= 0.5) {
      # random text
      var random = crypto.randomBytes(Math.floor((Math.random() * 100)) + 1).toString('hex');
      ws.send(random, function() {
        console.log('sent a random string of length %s', random.length);
      });
    } else {
      # random binary
      var random = crypto.randomBytes(Math.floor((Math.random() * 1024)) + 1);
      ws.send(randomBytes, {
        binary: true,
        mask: true
      }, function() {
        console.log('sent %d bytes of random binary data', randomBytes.length);
      });
    }

  }, timeout);
});
