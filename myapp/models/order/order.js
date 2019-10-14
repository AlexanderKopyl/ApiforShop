var db = require('../db');

const Order = function() {
    let result = {};
    return {
        selectAll: async function() {

            try {
                result = await db.connect.query('SELECT * FROM `oc_order` WHERE `order_status_id` > 0');
            } catch(e) {
                console.error(e);
            }
            return JSON.parse(JSON.stringify(result)) || null;
        },
        selectOrderById: async function(orderId) {
            try {
                result = await db.connect.execute('SELECT * FROM `oc_order` WHERE `order_id`= ? AND order_status_id > 0',[orderId]);
            } catch(e) {
                console.error(e);
            }
            return JSON.parse(JSON.stringify(result)) || null;
        },
        selectOrderByCustomerId: async function(customerId) {
            try {
                result = await db.connect.execute('SELECT * FROM `oc_order` WHERE `customer_id`= ? AND order_status_id > 0',[customerId]);
            } catch(e) {
                console.error(e);
            }
            return JSON.parse(JSON.stringify(result)) || null;
        },
        selectHistoryOrderByOrderId: async function(orderId) {
            try {
                result = await db.connect.execute('SELECT * FROM `oc_order_history` WHERE `order_id`= ? AND order_status_id > 0',[orderId]);
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