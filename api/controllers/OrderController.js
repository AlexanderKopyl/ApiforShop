const Op = require('sequelize').Op;
const {Order,OrderStatus} = require('../models/db');
let result = null;

OrderStatus.hasMany(Order, {foreignKey: 'order_id'});
Order.belongsTo(OrderStatus, {foreignKey: 'order_status_id',targetKey: 'order_status_id'});

// Показать список всех заказов.
exports.order_list = async (req, res, next) => {
    result = await Order.findAll({where: {order_status_id: {[Op.gt]: 0}},include: [OrderStatus]});
    res.json({
        message: 'Orders find',
        result_code: 0,
        result
    });

};

// Показать подробную страницу для данного заказа.
exports.order_detail = async (req, res, next) => {
    result = await Order.findOne({where: {order_id: req.params.id, order_status_id: {[Op.gt]: 0}},include: [OrderStatus]});
    res.json({
        message: 'Orders find',
        result_code: 0,
        result
    })
};
// Показать подробную страницу для заказов по конкретному пользователю.
exports.orderBycustomer = async (req, res, next) => {
    result = await Order.findAll({where: {customer_id: req.params.id, order_status_id: {[Op.gt]: 0}},include: [OrderStatus]});
    res.json({
        message: 'Orders find',
        result_code: 0,
        result
    });
};