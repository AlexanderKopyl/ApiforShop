var express = require('express');
var router = express.Router();
const Op = require('sequelize').Op;
const { Order } = require('../../models/db');
/* GET users listing. */
router.get('/', function(req, res, next) {
    Order.findAll({ where: {order_status_id: {[Op.gt]: 0} }}).then(orders => res.json(orders))
});
router.get('/:id', function(req, res, next) {
    Order.findOne({ where: {order_id: req.params.id, order_status_id: true } }).then(user => res.json(user))
});

module.exports = router;
