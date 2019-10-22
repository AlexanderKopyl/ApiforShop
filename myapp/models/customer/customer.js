var db = require('../db');
var md5 = require('js-md5');

const Customer = function() {
    let result = {};
    return {
        selectAll: async function() {

            try {
                result = await db.connect.query('SELECT * FROM oc_customer');
            } catch(e) {
                console.error(e);
            }
            return JSON.parse(JSON.stringify(result)) || null;
        },
        selectById: async function(customerId) {
            try {
                result = await db.connect.execute('SELECT * FROM oc_customer WHERE `customer_id`= ?',[customerId]);
            } catch(e) {
                console.error(e);
            }
            return JSON.parse(JSON.stringify(result)) || null;
        },
        login: async function(login,password) {
            try {
                result = await db.connect.execute("SELECT `customer_id`,`firstname`,`lastname`,`telephone`,`email` FROM `oc_customer` WHERE LOWER(email) ='"+ login.toLowerCase() +"' OR telephone LIKE '%"+ login.toLowerCase()+"'AND (password = SHA1(CONCAT(salt, SHA1(CONCAT(salt, SHA1('" + password+ "'))))) OR password = '"+ md5(password)+"')AND status = '1'");
            } catch(e) {
                console.error(e);
            }

            if(result[0].length === 0){
                result[0].push({
                    'message' : 'This user not found',
                    'result_code': 404
                });
                console.log(result[0]);
            }else{
                result[0].push({
                    'message' : 'User is find',
                    'result_code': 0
                });
            }
            return JSON.parse(JSON.stringify(result)) || null;
        }
    }
};

module.exports = {
    customer: new Customer()
};


