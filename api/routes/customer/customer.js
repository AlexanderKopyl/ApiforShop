let express = require('express');
let router = express.Router();
let {customer_list,customer_detail,customer_login,token} = require('../../controllers/customerController');
const fun = require('../../lib/function');

/* GET users listing. */
router.get('/', fun.verifyToken, customer_list);
router.get('/:id', fun.verifyToken, customer_detail);
router.post('/login', customer_login);
router.post('/token', token);

module.exports = router;
