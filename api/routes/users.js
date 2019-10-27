var express = require('express');
var router = express.Router();
const { Customer } = require('../models/db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  Customer.findAll().then(users => res.json(users))
});

module.exports = router;
