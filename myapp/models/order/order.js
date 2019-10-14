var db = require('../db');

const Order = function() {
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
        }
    }
};

module.exports = {
    order: new Order()
};