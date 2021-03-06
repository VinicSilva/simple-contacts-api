const express = require('express');
require('express-async-errors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('ERROR HANDLER:', error.message);
  response.sendStatus(500);
});

app.listen(3006, () => console.log('Running in 3006!!!!!'));
