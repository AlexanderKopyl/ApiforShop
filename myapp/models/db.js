var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19901810',
    database: 'apiforshop'
});

return connection;
