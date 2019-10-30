const {Op, fn, col, where} = require('sequelize');
const {Customer} = require('../models/db');
let md5 = require('js-md5');
let jwt = require('jsonwebtoken');


// Показать список всех авторов.
exports.customer_list = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({
                message: 'User dont find',
                result_code: 404
            });
        } else {
            Customer.findAll()
                .then(
                    users => {
                        res.json({
                            message: 'Users find',
                            result_code: 0,
                            users,
                            authData
                        });
                    });

        }
    });


};

// Показать подробную страницу для данного автора.
exports.customer_detail = (req, res, next) =>  {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json({
                message: 'User dont find',
                result_code: 404
            });
        } else {
            Customer.findOne({where: {customer_id: req.params.id}})
                .then(user => {
                    res.json({
                        message: 'Users find',
                        result_code: 0,
                        user
                    });
                })

        }
    });

};
exports.customer_login = (req, res, next) => {

    // Mock user
    Customer.findOne({
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
    })
        .then(
            user => {
                if (user !== null) {
                    jwt.sign({user}, 'secretkey', {expiresIn: '1 day'}, (err, token) => {
                        res.json([{
                            user,
                            token
                        }]);
                    });
                } else {
                    res.json([{
                        token:user
                    }]);
                }
            })
};