let express = require('express');
let router = express.Router();

const fun = require('../../lib/function');
let {sendMessage} = require('../../controllers/customerController');

router.post('/',fun.verifyToken,sendMessage);

module.exports = router;