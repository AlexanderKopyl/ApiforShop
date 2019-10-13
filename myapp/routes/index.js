var express = require('express');
var router = express.Router();
var customer = require('../models/customer/customer');
//
customer.customers.selectAll().then((r)=> console.log(r));
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
