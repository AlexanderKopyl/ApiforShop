const Sequelize = require('sequelize');
let {config: {prefix,db,user_db,user_password,host,dialect}} = require('../config/server.config');
const CustomerModel = require('./customer/customer');
const OrderModel = require('./order/order');
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
let Order = OrderModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = {
    Customer,
    Order
};