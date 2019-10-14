// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'apiforshop'
// });

var mysql = require('mysql2/promise');
var con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apiforshop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


exports.connect = con;
