const { Pool } = require('pg');
const config = require('./dbConfig');

module.exports = new Pool(config);