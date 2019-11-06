const Sequelize = require('sequelize');
let {config: {prefix,db,user_db,user_password,host,dialect}} = require('../config/server.config');

const CustomerModel = require('./customer/customer');
const CustomerRewardModel = require('./customer/customer_reward');
const OrderModel = require('./order/order');
const OrderStatusModel = require('./order/order_status');
const OrderHistoryModel = require('./order/order_history');
const OrderProductModel = require('./order/order_product');

const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const log = log4js.getLogger('db');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(db, user_db, user_password, {
    host,
    dialect, /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


let Customer = CustomerModel(sequelize, Sequelize);
let CustomerReward = CustomerRewardModel(sequelize, Sequelize);
let Order = OrderModel(sequelize, Sequelize);
let OrderStatus = OrderStatusModel(sequelize, Sequelize);
let OrderHistory = OrderHistoryModel(sequelize, Sequelize);
let OrderProduct = OrderProductModel(sequelize, Sequelize);



sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    }).catch(function(reason) {
    // отказ
    log.error("Error name: " + reason.name + " Address: " + reason.parent.address + " Port: " + reason.parent.port + " Syscall: " + reason.parent.syscall);
});

module.exports = {
    Customer,
    OrderStatus,
    OrderHistory,
    CustomerReward,
    OrderProduct,
    Order
};