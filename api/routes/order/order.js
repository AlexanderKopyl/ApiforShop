var express = require('express');
var router = express.Router();
const Op = require('sequelize').Op;
let jwt = require('jsonwebtoken');
const fun = require('../../lib/function');
const { Order } = require('../../models/db');
/* GET users listing. */
router.get('/', fun.verifyToken,function(req, res, next) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({
                message: 'Orders dont find',
                result_code: 404
            });
        } else {
            Order.findAll({ where: {order_status_id: {[Op.gt]: 0} }}).then(
                orders => {
                    res.json({
                        message: 'Orders find',
                        result_code: 0,
                        orders
                    });
                })

        }
    });

});
router.get('/:id',fun.verifyToken, function(req, res, next) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({
                message: 'Orders dont find',
                result_code: 404
            });
        } else {
            Order.findOne({ where: {order_id: req.params.id, order_status_id:{[Op.gt]: 0} } })
                .then(orders_user => {
                    console.log(orders_user);
                    res.json({
                        message: 'Orders find',
                        result_code: 0,
                        orders_user
                    });
                })

        }
    });

});
router.get('/customer/:id',fun.verifyToken, function(req, res, next) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({
                message: 'Orders dont find',
                result_code: 404
            });
        } else {
            Order.findAll({ where: {customer_id: req.params.id, order_status_id:{[Op.gt]: 0} } })
                .then(orders_user => {
                    console.log(orders_user);
                    res.json({
                        message: 'Orders find',
                        result_code: 0,
                        orders_user
                    });
                })

        }
    });

});

module.exports = router;
