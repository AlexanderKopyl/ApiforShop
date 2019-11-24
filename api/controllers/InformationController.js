const {
  Information,
  InformationDescription,
} = require('../models/db');

const log4js = require('log4js');

log4js.configure({
  appenders: {cheese: {type: 'file', filename: 'error.log'}},
  categories: {default: {appenders: ['cheese'], level: 'error'}},
});

const log = log4js.getLogger('manufacturer');

exports.information = async (req, res, next) => {
};
exports.informations = async (req, res, next) => {
};
exports.informations = async (req, res, next) => {
};
