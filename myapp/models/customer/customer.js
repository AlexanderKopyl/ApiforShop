// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'me',
//     password : 'secret',
//     database : 'my_db'
// });
//
// connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

var db = require('../db');

    Customers = function() {

        return {
            selectAll: async function() {
                let result = {};
                try {
                        result = await db.connect.query('SELECT * FROM oc_customer LIMIT 0,1 ');
                } catch(e) {
                    console.error(e);
                }
                return result.rows || null;
            },
            selectById: function(customerId) {

            }

        }
    };
    exports.customers = new Customers();

//
// db.connect.query('UPDATE foo SET key = ?', ['value']).then(function () {
//     return db.connect.query('SELECT * FROM foo');
// }).spread(function (rows) {
//     console.log('Loook at all the foo', rows);
// });
// console.log(db);
// db.connect.connect();
//
// var customer = null;
// db.connect.query('SELECT * FROM oc_customer', (err,rows) => {
//     if (err) {
//         return err
//     }
//     customers = rows[0]
// });
//
// var x = customer;
// console.log(customer);
// module.exports ={
//     x
// };
// db.connect.end();

