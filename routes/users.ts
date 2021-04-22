import Persistbroker from '../db/PersistBrokerFactory';
const { json } = require('express');
var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var broker = new Persistbroker();
  var datetime = await broker.getNow();
  console.log(datetime);
  res.send(datetime);
});

module.exports = router;
