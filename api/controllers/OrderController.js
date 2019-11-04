const Op = require('sequelize').Op;
const {Order,OrderStatus} = require('../models/db');
let result = null;

const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const log = log4js.getLogger('order');

OrderStatus.hasMany(Order, {foreignKey: 'order_id'});
Order.belongsTo(OrderStatus, {foreignKey: 'order_status_id',targetKey: 'order_status_id'});

// Показать список всех заказов.
exports.order_list = async (req, res, next) => {

    try{
        result = await Order.findAll({where: {order_status_id: {[Op.gt]: 0}},include: [OrderStatus]});
    }catch (e) {
        log.error("Error: " + e.message);
    }
    finally {
       if(result !== null){
           res.json({
               message: 'Orders find',
               result_code: 0,
               result
           });
       }
    }



};

// Показать подробную страницу для данного заказа.
exports.order_detail = async (req, res, next) => {
    try {
        result = await Order.findOne({where: {order_id: req.params.id, order_status_id: {[Op.gt]: 0}},include: [OrderStatus]});

    }catch (e) {
        log.error("Error: " + e.message);
    }finally {
        if(result !== null){
            res.json({
                message: 'Orders find',
                result_code: 0,
                result
            })
        }
    }

};
// Показать подробную страницу для заказов по конкретному пользователю.
exports.orderBycustomer = async (req, res, next) => {
    try{
        result = await Order.findAll({where: {customer_id: req.params.id, order_status_id: {[Op.gt]: 0}},include: [OrderStatus]});

    }catch (e) {
        log.error("Error: " + e.message);
    }finally {
        if(result !== null){
            res.json({
                message: 'Orders find',
                result_code: 0,
                result
            });
        }
    }

};