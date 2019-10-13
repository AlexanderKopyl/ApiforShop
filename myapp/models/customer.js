var db = require('db');

db.connect();

db.query('SELECT * FROM oc_customer', function (err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0])
});

db.end();