var express = require('express');
var { Client } = require('../db/dbConfig');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  Client.connect().then(() => {
    Client.query('SELECT NOW()').then((resp) => {
      res.send(resp.rows[0]);
    });
  });
});

module.exports = router;
