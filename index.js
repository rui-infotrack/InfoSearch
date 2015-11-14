var restify = require('restify');
var faker = require('faker');

var server = restify.createServer({
  name: 'InfoSearch',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/api/search', function (req, res, next) {
  const results = [];
  const term = req.params.term;
  for (var i = 0; i < 5; i++) {
    results.push({
      title: term + ' ' + faker.company.companyName()
    });
  }
  res.send({ results: results });
  return next();
});

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
