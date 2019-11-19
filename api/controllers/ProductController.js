const {Op, fn, col} = require('sequelize');
const {Customer,CustomerReward} = require('../models/db');
let {config: {service_mail,admin_mail,user_email_password}} = require('../config/server.config');
let md5 = require('js-md5');
let jwt = require('jsonwebtoken');
const fun = require('../lib/function');


const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const log = log4js.getLogger('product');

let result = null;


exports.customer_list = async (req, res, next) => {
    result = await Customer.findAll();
    res.json({
        message: 'Users find',
        result_code: 0,
        result
    });
};