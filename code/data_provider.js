var express = require('express');
var app = express();

var logger = require('morgan');
app.use(logger('dev'));

var Chance = require('chance');
var chance = new Chance();
var data = require('./data.json');

app.get('/?*', function(request, response) {

  var requestedResourceId = request.params[0];

  if (!requestedResourceId || requestedResourceId < 0) {
    console.log('Bad Request: Invalid parameters');
    response.statusCode = 400;
    return response.send('Bad Request');
  }

  switch (requestedResourceId) {
    case 'text':
      var body = chance.paragraph({
        sentences: 1
      });
      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

      return response.send(body);

    case 'json':
      var body = data;
      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

      return response.send(body);

    default:
      resourceToReturn.id = null;
      response.statusCode = 501;

      console.log('Not implemented: ' + requestedResourceId);

      return response.send('Not implemented');
  }
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server ' + process.pid + ' listening on ', port);
});
