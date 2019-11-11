require('dotenv').config();

exports.config = {
  "prefix" : "oc_",
  "db":"apiforshop",
  "user_db":"root",
  "user_password": '19901810',
  "host": 'localhost',
  "dialect":'mysql',
  "service_mail": 'gmail',
  "admin_mail":"alexsander11115@gmail.com",
  "user_email_password": process.env.PASSWORD_EMAIL
};