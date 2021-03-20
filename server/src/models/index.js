const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};
db.Post = require('./post.model.js')(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
