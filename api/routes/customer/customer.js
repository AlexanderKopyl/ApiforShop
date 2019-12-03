let express = require('express');
let router = express.Router();
let {
    customer_list,
    customer_detail,
    customer_login,
    token,
    customer_reward_detail,
    update_customer
} = require('../../controllers/customerController');
const fun = require('../../lib/function');

/* GET users listing. */
router.get('/', fun.verifyToken, customer_list);
router.get('/:id', fun.verifyToken, customer_detail);
router.put('/:id', fun.verifyToken, update_customer);
router.get('/reward/:id', fun.verifyToken, customer_reward_detail);
router.post('/login', customer_login);
router.post('/token', token);

module.exports = router;
