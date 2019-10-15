var express = require('express');
var router = express.Router();
var order = require('../../models/order/order').order;

/* GET home page. */
router.get('/', function (req, res, next) {

    order.selectAll()
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

router.get('/:id', function (req, res, next) {

    order.selectOrderById(+req.params.id)
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});
router.get('/user/:id', function (req, res, next) {
    order.selectOrderByCustomerId(+req.params.id)
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

router.get('/history/:id', function (req, res, next) {
    order.selectHistoryOrderByOrderId(+req.params.id)
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

module.exports = router;