let express = require('express');
let router = express.Router();

const fun = require('../../lib/function');
let {sendMessage} = require('../../controllers/customerController');

// router.get('/mail', fun.verifyToken,sendMessage);
router.get('/', sendMessage);

module.exports = router;