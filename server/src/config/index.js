const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';

const dotenvFile = `${__dirname}/../../.env.${env}`;
dotenv.config({ path: dotenvFile });
