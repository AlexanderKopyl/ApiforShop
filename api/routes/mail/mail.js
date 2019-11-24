const express = require('express');
const router = express.Router();

const fun = require('../../lib/function');
const {sendMessage} = require('../../controllers/customerController');

router.post('/', fun.verifyToken, sendMessage);

module.exports = router;
