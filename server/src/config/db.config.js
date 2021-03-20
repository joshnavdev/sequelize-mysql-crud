const Sequelize = require('sequelize');
const { database } = require('./index');

const hasLogging = database.logging === 'true';

const sequelize = new Sequelize(database.name, database.user, database.pass, {
  host: database.host,
  port: database.port,
  dialect: 'mysql',
  logging: hasLogging ? console.log : undefined,
});

sequelize
  .authenticate()
  .then(() => {
    if (hasLogging)
      console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
