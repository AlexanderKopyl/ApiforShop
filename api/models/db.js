const Sequelize = require('sequelize');
let {config: {prefix}} = require('../server.config');
const CustomerModel = require('./customer/customer');
const OrderModel = require('./order/order');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('apiforshop', 'root', '19901810', {
    host: 'localhost',
    dialect:'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


let Customer = CustomerModel(sequelize, Sequelize);
let Order = OrderModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = {
    Customer,
    Order
};