var express = require('express');
var router = express.Router();
var customer = require('../../models/customer/customer').customer;

/* GET home page. */
router.get('/', function (req, res, next) {

    customer.selectAll()
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

router.get('/:id', function (req, res, next) {
    debugger
    customer.selectById(+req.params.id)
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

router.get('/email/:email/password/:password', function (req, res, next) {
    customer.login(req.params.email, req.params.password)
        .then(
            (r) => {
                    res.json(JSON.parse(JSON.stringify(r)))
            }
        )

});

module.exports = router;