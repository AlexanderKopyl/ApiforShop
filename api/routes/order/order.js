let express = require('express');
let router = express.Router();
const fun = require('../../lib/function');
let {order_list,order_detail,orderBycustomer} = require('../../controllers/OrderController');

/* GET users listing. */
router.get('/', fun.verifyToken,order_list);
router.get('/:id',fun.verifyToken, order_detail);
router.get('/customer/:id',fun.verifyToken, orderBycustomer);

module.exports = router;
