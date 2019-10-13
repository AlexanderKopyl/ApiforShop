var db = require('mysql-promise')();
db.configure({
    host: 'localhost',
    user: 'root',
    password: '19901810',
    database: 'apiforshop'
});


exports.connect = db;
