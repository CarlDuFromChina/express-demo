const { Pool, Client } = require('pg');

var config = {
  host: '127.0.0.1',
  user: 'postgres',
  database: 'postgres',
  password: '123123',
  port: 5432,
  connectionTimeoutMillis: 5000,
};

module.exports = {
  Pool: new Pool(config),
  Client: new Client(config),
};
