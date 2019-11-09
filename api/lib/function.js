let jwt = require('jsonwebtoken');
const log4js = require('log4js');
const nodemailer = require('nodemailer');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const log = log4js.getLogger('validation');

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
                    // log.warn('Error in valid jwt.verify and user ' + authData.result.customer_id);
                    res.json({
                        message: 'Request not valid',
                        result_code: 404,
                        err
                    });
                } else {
                    next();
                }
            });

        } else {
            // Forbidden
            log.warn('Error code 403 token not valid ' + req.token);
            res.sendStatus(403);
        }

    },
    generateAccessToken(user,token,expire) {
        return jwt.sign(user, token, {expiresIn: expire});
    },
    generateRefreshToken(user,token,expire) {
        return jwt.sign(user, token, {expiresIn: expire});
    },
    sendMail(service,user,pass,to,subject,text){
        let transporter = nodemailer.createTransport({
            service,
            host: "smtp.gmail.com",
            auth: {
                user,
                pass
            }
        });
        let mailOptions = {
            from: user,
            to,
            subject,
            text
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

};