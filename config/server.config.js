require('dotenv').config();

exports.config = {
  "prefix" : "oc_",
  "db":"b0s",
  "user_db":"c0_alex",
  "user_password": 'Pv7ko@UvHF',
  "host": 'localhost',
  "dialect":'mysql',
  "service_mail": 'gmail',
  "admin_mail":"alexsander11115@gmail.com",
  "user_email_password": process.env.PASSWORD_EMAIL
};