const Op = require('sequelize').Op;
let jwt = require('jsonwebtoken');
const { Order } = require('../models/db');


// Показать список всех заказов.
exports.order_list = (req, res, next) => {
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

};

// Показать подробную страницу для данного заказа.
exports.order_detail = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({
                message: 'Orders dont find',
                result_code: 404
            });
        } else {
            Order.findOne({ where: {order_id: req.params.id, order_status_id:{[Op.gt]: 0} } })
                .then(orders_user => {
                    res.json({
                        message: 'Orders find',
                        result_code: 0,
                        orders_user
                    });
                })

        }
    });

};
// Показать подробную страницу для заказов по конкретному пользователю.
exports.orderBycustomer = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({
                message: 'Orders dont find',
                result_code: 404
            });
        } else {
            Order.findAll({ where: {customer_id: req.params.id, order_status_id:{[Op.gt]: 0} } })
                .then(orders_user => {
                    res.json({
                        message: 'Orders find',
                        result_code: 0,
                        orders_user
                    });
                })

        }
    });

};