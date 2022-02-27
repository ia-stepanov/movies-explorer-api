const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const errorHandler = require('./middlewares/errorHandler');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errors());
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', () => {
  console.log('Connection successful');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
