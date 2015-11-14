var restify = require('restify');
var faker = require('faker');

var server = restify.createServer({
  name: 'InfoSearch',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

function getRandomTitle(type) {
  switch (type) {
  case 'company':
    return faker.company.companyName();
  case 'person':
    return faker.name.findName();
  case 'address':
    return [
      faker.address.streetAddress('##'),
      faker.address.city(),
      faker.address.state(),
      faker.address.zipCode('####')
    ].join(', ');
  }
}

server.get('/api/search', function (req, res, next) {
  const results = [];
  const term = req.params.term;
  const type = ['company', 'person', 'address'][Math.floor(Math.random() * 3)];
  for (var i = 0; i < 5; i++) {
    results.push({
      title: getRandomTitle(type) + ' ' + term
    });
  }
  res.send({
    type: type,
    results: results
  });
  return next();
});

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
