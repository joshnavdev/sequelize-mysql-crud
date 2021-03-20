const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(cors());

db.sequelize.sync();

app.get('/', (req, res) => {
  res.send('Welcome!!');
});

module.exports = app;
