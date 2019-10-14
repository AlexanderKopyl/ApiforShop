var express = require('express');
var router = express.Router();
var order = require('../../models/customer/customer').order;

/* GET home page. */
router.get('/', function (req, res, next) {

    order.selectAll()
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

router.get('/:id', function (req, res, next) {

    order.selectById(+req.params.id)
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

module.exports = router;