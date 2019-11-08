const {Op, fn, col} = require('sequelize');
const {Customer,CustomerReward} = require('../models/db');
let md5 = require('js-md5');
let jwt = require('jsonwebtoken');
const fun = require('../lib/function');

const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const log = log4js.getLogger('customer');

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


exports.customer_detail = async (req, res, next) => {
    try{
        result = await Customer.findOne({where: {customer_id: req.params.id}});
    }catch (e) {
        log.error('Error: '+e.message);
    }
    finally {
        if (result !== null) {
            res.json({
                message: 'Users find',
                result_code: 0,
                result
            });
        }else {
            log.error("Customer: " + req.params.id + " dont find in function customer_detail");
            res.json([{
                message: 'User dont find',
                result_code: 404,
                result
            }]);
        }

    }

};


exports.customer_reward_detail = async (req, res, next) => {
    try{
        result = await CustomerReward.findAll({where: {customer_id: req.params.id}});
    }catch (e) {
        log.error('Error: '+e.message);
    }
    finally {
        if (result !== null) {
            res.json({
                message: 'Customer reward find',
                result_code: 0,
                result
            });
        }else {
            log.error("Customer: " + req.params.id + " dont find in function customer_detail");
            res.json([{
                message: 'Customer reward dont find',
                result_code: 404,
                result
            }]);
        }

    }

};

exports.customer_login = async (req, res, next) => {

    try {
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
    }catch (e) {
        log.error('Error: '+e.message);
    }

    finally {
        if (result !== null) {

            let now = new Date();
            const accessToken = fun.generateAccessToken({result}, 'secretkey', "1800s");
            const refreshToken = fun.generateRefreshToken({result}, 'refresh_secretkey', "7d");

            res.json([{
                user: result,
                tokens: {
                    access: {token: accessToken, expiredIn: now.setTime(now.getTime() + 1800 * 1000)},
                    refresh: {token: refreshToken, expiredIn: now.setTime(now.getTime() + (7 * 24 * 60 * 60 * 1000))},
                }
            }]);
        } else {
            log.error("Customer: dont find in function customer_login");

            res.json([{
                token: result
            }]);
        }
    }

};
//hello
exports.token = (req, res, next) => {

    const refreshToken = req.body.token;

    if (refreshToken == null) {
        log.error("refreshToken is null status code 401");
        return res.sendStatus(401);
    }

    jwt.verify(refreshToken, 'refresh_secretkey', (err, user) => {
        if (err) return res.sendStatus(403);
        let { result } = user;
        const accessToken = fun.generateAccessToken(result,'secretkey', "1800s");

        res.json({accessToken: accessToken})
    })

};