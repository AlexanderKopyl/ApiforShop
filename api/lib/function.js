let jwt = require('jsonwebtoken');

module.exports = {
    verifyToken(req, res, next) {
        // Get auth header value
        const bearerHeader = req.headers['authorization'];
        // Check if bearer is undefined
        if (typeof bearerHeader !== 'undefined') {
            // Split at the space
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token
            req.token = bearerToken;
            // Next middleware
            jwt.verify(req.token, 'secretkey', (err, authData) => {
                if (err) {
                    res.json({
                        message: 'Orders dont find',
                        result_code: 404,
                        err
                    });
                }else{
                    next();
                }
            });

        } else {
            // Forbidden
            res.sendStatus(403);
        }

    }

};