const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';

const dotenvFile = `${__dirname}/../../.env.${env}`;
dotenv.config({ path: dotenvFile });

const config = {
  app: {
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
};

module.exports = config;
