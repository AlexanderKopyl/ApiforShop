let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let fs = require('fs');

const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'error.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const log = log4js.getLogger('app');

const cors = require('cors');

let indexRouter = require('./routes/index');
let orderRouter = require('./routes/order/order');
let customerRouter = require('./routes/customer/customer');
let mailRouter = require('./routes/mail/mail');



let app = express();

let passport   = require('passport');
let session    = require('express-session');
let bodyParser = require('body-parser');

// log all requests to access.log
app.use(logger('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// app.use(bodyParser.json());
// For Passport

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

// app.use('/', indexRouter);
// Handles any requests that don't match the ones above
app.use('/', indexRouter);
app.use('/api/orders', orderRouter);
app.use('/api/customers', customerRouter);
app.use('/api/mail', mailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  log.error(err.message);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
