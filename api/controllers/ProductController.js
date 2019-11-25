const {Op, fn, col} = require("sequelize");

const {
    Product,
    ProductAttribute,
    ProductDescription,
    ProductDiscount,
    ProductImage,
    ProductSpecial,
    ProductToCategory,
} = require("../models/db");

const {
    OrderProduct,
    Order,
} = require("../models/db");

const fun = require("../lib/function");

const log4js = require("log4js");
log4js.configure({
    appenders: {cheese: {type: "file", filename: "error.log"}},
    categories: {default: {appenders: ["cheese",], level: "error"}},
},);

const log = log4js.getLogger("product");

let result = null;

ProductDescription.hasMany(Product, {foreignKey: "product_id"});
Product.belongsTo(ProductDescription, {foreignKey: "product_id", targetKey: "product_id"});

exports.products = async (req, res, next) => {
    try {
        result = await Product.findAll({
            where: {status: {[Op.gt]: 0}},
            attributes: ["product_id", "model", "image", "manufacturer_id", "price","quantity","viewed"],
            include: [
                {
                    model: ProductDescription,
                    where: {language_id: 1},
                }
            ]
        });
    } catch (e) {
        log.error("Error: " + e.message,);
    } finally {
        if (result !== null) {
            res.json({
                message: "Products find",
                result_code: 0,
                result,
            },);
        } else {
            res.sendStatus(404);
        }
    }
};

exports.product = async (req, res, next) => {
    try {
        result = await Product.findOne(
            {
                where: {product_id: req.params.id},
                attributes: ["product_id", "model", "image", "manufacturer_id", "price", "weight","quantity","viewed"],
                include: [
                    {
                        model: ProductDescription,
                        where: {language_id: 1},
                    }
                ]
            }
        );
    } catch (e) {
        log.error("Error: " + e.message,);
    } finally {
        if (result !== null) {
            res.json({
                message: "Product find",
                result_code: 0,
                result,
            },);
        } else {
            res.sendStatus(404);
        }
    }
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