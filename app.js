'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

const swaggerUi = require('swagger-ui-express'); //adicionei essa linha

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const swaggerUiMiddleware = swaggerUi.setup( //adicionei essa linha 
    swaggerExpress.runner.swagger  //adicionei essa linha
  );  //adicionei essa linha

  app.use('/api-docs', swaggerUi.serve, swaggerUiMiddleware); //adicionei essa linha

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
