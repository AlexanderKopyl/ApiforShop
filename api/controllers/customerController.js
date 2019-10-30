const {Op, fn, col} = require('sequelize');
const {Customer} = require('../models/db');
let md5 = require('js-md5');
let jwt = require('jsonwebtoken');
let result = null;

// Показать список всех клиентов.
exports.customer_list = async (req, res, next) => {
    result = await Customer.findAll();
    res.json({
        message: 'Users find',
        result_code: 0,
        result
    });
};

// Показать подробную страницу для данного клиента.
exports.customer_detail = async (req, res, next) => {

    result = await Customer.findOne({where: {customer_id: req.params.id}});
    res.json({
        message: 'Users find',
        result_code: 0,
        result
    });
};

// Авторизация клиента.
exports.customer_login = async (req, res, next) => {

    // Mock user
    result = await Customer.findOne({
        where: {
            [Op.and]: [
                {
                    [Op.or]: [{email: {[Op.like]: '%' + req.body.login + '%'}}, {telephone: {[Op.like]: '%' + req.body.login}}]
                },
                {
                    [Op.or]: [{password: fn('sha1', fn('concat', col('salt'), fn('sha1', fn('concat', col('salt'), fn('sha1', req.body.password)))))}, {password: md5(req.body.password)}]
                }
            ]
        }
    });
    if (result !== null) {

        let now = new Date();

        jwt.sign({result}, 'secretkey', {expiresIn: '1h'}, (err, token) => {
            res.json([{
                user:result,
                expire: now.setTime(now.getTime() + 1 * 3600 * 1000),
                token
            }]);
        });
    } else {
        res.json([{
            token: result
        }]);
    }
};