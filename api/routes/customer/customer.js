var express = require('express');
var router = express.Router();
const {Op, fn, col, where} = require('sequelize');
const {Customer} = require('../../models/db');
let md5 = require('js-md5');
/* GET users listing. */
router.get('/', function (req, res, next) {
    Customer.findAll().then(users => res.json(users))
});
router.get('/:id', function (req, res, next) {
    Customer.findOne({where: {customer_id: req.params.id}}).then(user => res.json(user))
});
router.get('/:login/:password', function (req, res, next) {
    Customer.findOne({
        where: {
            [Op.and]: [
                {
                    [Op.or]: [{email: {[Op.like]: '%' + req.params.login + '%'}}, {telephone: {[Op.like]: '%' + req.params.login}}]
                },
                {
                    [Op.or]: [{password: fn('sha1', fn('concat', col('salt'), fn('sha1', fn('concat', col('salt'), fn('sha1', req.params.password)))))}, {password: md5(req.params.password)}]
                }
            ]
        }
    })
        .then(user => res.json(user))
});

module.exports = router;
