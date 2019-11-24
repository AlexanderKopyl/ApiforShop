const {Op, fn, col} = require('sequelize');

const {
  Product,
  ProductAttribute,
  ProductDescription,
  ProductDiscount,
  ProductImage,
  ProductSpecial,
  ProductToCategory,
} = require('../models/db');

const {
  OrderProduct,
  Order,
} = require('../models/db');

const fun = require('../lib/function');

const log4js = require('log4js');
log4js.configure({
  appenders: {cheese: {type: 'file', filename: 'error.log'}},
  categories: {default: {appenders: ['cheese'], level: 'error'}},
});

const log = log4js.getLogger('product');

const result = null;


exports.products = async (req, res, next) => {
};
exports.product = async (req, res, next) => {
};
exports.product_specials = async (req, res, next) => {
};
exports.popular_products = async (req, res, next) => {
};
exports.best_seller_products = async (req, res, next) => {
};
exports.product_attributes = async (req, res, next) => {
};
exports.product_discounts = async (req, res, next) => {
};
exports.product_images = async (req, res, next) => {
};
exports.categories = async (req, res, next) => {
};
exports.total_products = async (req, res, next) => {
};
exports.total_product_specials = async (req, res, next) => {
};
