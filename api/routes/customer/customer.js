let express = require('express');
let router = express.Router();
const {Op, fn, col, where} = require('sequelize');
const {Customer} = require('../../models/db');
let md5 = require('js-md5');
let jwt = require('jsonwebtoken');
const fun = require('../../lib/function');
// let bodyParser = require('body-parser');
/* GET users listing. */
router.get('/', fun.verifyToken, function (req, res, next) {
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


});
router.get('/:id', fun.verifyToken, function (req, res, next) {
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

});
router.post('/login', function (req, res, next) {

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
});

module.exports = router;
