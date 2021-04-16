const { Client } = require('pg');
const config = require('./dbConfig');

Client.prototype.getNow = function () {
  return this.connect().then(() => {
    return this.query('SELECT NOW()').then(resp => {
      console.log(resp.rows[0].now);
      return resp.rows[0].now;
    }).finally(() => {
      this.end();
    });
  });
}

module.exports = () => new Client(config);