const { json } = require('express');
var express = require('express');
var getClient = require('../db/dbClientFactory');

var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var client = getClient();
  await client.connect();
  const resp = await client.query('select * from user_info');
  res.send(JSON.stringify(resp.rows));
});

module.exports = router;
