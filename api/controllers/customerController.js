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

const log = log4js.getLogger('customer');

let result = null;

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
exports.update_customer = async (req, res, next) => {

    let error = {},
        patternNameaAndLastName = /^[А-ЯЁ][а-яё]+$/,
        patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        patternPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

    try {

        if (!patternNameaAndLastName.test(`${req.body.firstname}`)){
            error['firstname'] = 'Имя введено не правильно.. Имя пишется на кирилице'
        }
        if (!patternNameaAndLastName.test(`${req.body.lastname}`)){
            error['lastname'] = 'Фамилия введена не правильно.. Фамилия пишется на кирилице'
        }
        if (!patternEmail.test(`${req.body.email}`)){
            error['email'] = 'Email введен не коректно'
        }
        if (!patternPhone.test(`${req.body.telephone}`)){
            error['telephone'] = 'Телефон введен не коректно'
        }

        if (fun.isEmptyObject(error)){
            const [numberOfAffectedRows, affectedRows] = await Customer.update(
                {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    telephone: req.body.telephone,

                },
                {
                    where: { customer_id: req.params.id},
                    returning: true, // needed for affectedRows to be populated
                    plain: true,
                }
            );
        }


        result = await Customer.findOne({where: {customer_id: req.params.id}});


    }catch (e) {
        log.error('Error: '+e.message);
        res.send(e)
    }

    finally {
        if (result !== null && fun.isEmptyObject(error)) {
            res.json({
                message: 'Customer updated',
                result_code: 0,
                result
            });
        }else {
            log.error("Customer: " + req.params.id + " dont find in function update_customer or have error");
            res.json({
                message: 'Customer dont updated',
                result_code: 404,
                result,
                error
            });


        }

    }

};
exports.sendMessage = async (req, res, next) =>{

    result = await fun.sendMail(
        res,
        service_mail,
        req.body.email,
        user_email_password,
        admin_mail,
        req.body.subject,
        `<h1>Имя: ${req.body.name}</h1>
            <p>Сообщение: ${req.body.text}</p>
        `
        );
    // res.json({answer: result});

};
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