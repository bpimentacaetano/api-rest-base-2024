# Skeleton project for Swagger

# Comandos utilizadaos no minicurso:

# API node swagger

#### Baixar e Instalar o  Nodejs:

`<link>` : <https://nodejs.org/en/download/>

#### Instalar o swagger

`$ npm install -g swagger`

#### Criar projeto
`$ swagger project create <nome-prrojeto>`
(escolher express)


#### Add documentação automática
`$ npm i swagger-ui-express --save`

#### Ajustar código da API
##### app.js
```javascript
const swaggerUi = require('swagger-ui-express');

const swaggerUiMiddleware = swaggerUi.setup(
    swaggerExpress.runner.swagger
  );

app.use('/api-docs', swaggerUi.serve, swaggerUiMiddleware);
```
