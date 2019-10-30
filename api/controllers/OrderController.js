const Op = require('sequelize').Op;
const {Order} = require('../models/db');
let result = null;

// Показать список всех заказов.
exports.order_list = async (req, res, next) => {
    result = await Order.findAll({where: {order_status_id: {[Op.gt]: 0}}});
    res.json({
        message: 'Orders find',
        result_code: 0,
        result
    });

};

// Показать подробную страницу для данного заказа.
exports.order_detail = async (req, res, next) => {
    result = await Order.findOne({where: {order_id: req.params.id, order_status_id: {[Op.gt]: 0}}});
    res.json({
        message: 'Orders find',
        result_code: 0,
        result
    })
};
// Показать подробную страницу для заказов по конкретному пользователю.
exports.orderBycustomer = async (req, res, next) => {
    result = await Order.findAll({where: {customer_id: req.params.id, order_status_id: {[Op.gt]: 0}}});
    res.json({
        message: 'Orders find',
        result_code: 0,
        result
    });
};