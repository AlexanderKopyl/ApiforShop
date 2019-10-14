var db = require('../db');

const User = function() {
    let result = {};
    return {
        selectAll: async function() {

            try {
                result = await db.connect.query('SELECT * FROM oc_user');
            } catch(e) {
                console.error(e);
            }
            return JSON.parse(JSON.stringify(result)) || null;
        },
        selectById: async function(customerId) {
            try {
                result = await db.connect.execute('SELECT * FROM oc_user WHERE `user_id`= ?',[customerId]);
            } catch(e) {
                console.error(e);
            }
            return JSON.parse(JSON.stringify(result)) || null;
        }
    }
};

module.exports = {
    user: new User()
};


