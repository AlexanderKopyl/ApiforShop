const Sequelize = require('sequelize');
let {config: {prefix,db,user_db,user_password,host,dialect}} = require('../config/server.config');

const {
    ProductModel,
    ProductAttributeModel,
    ProductDescriptionModel,
    ProductDiscountModel,
    ProductImageModel,
    ProductSpecialModel,
    ProductToCategoryModel,
} = require('./product');
const {
    OrderModel,
    OrderStatusModel,
    OrderHistoryModel,
    OrderProductModel,
    OrderTotalModel
} = require('./order');

const {
    CustomerRewardModel,
    CustomerModel
} = require('./customer');
const {
    ArticleModel,
    ArticleDescriptionModel
} = require('./article');

const {
    ManufacturerModel,
    ManufacturerDescriptionModel
} = require('./manufacturer');
const {
    AttributeGroupDescriptionModel,
    AttributeDescriptionModel,
    AttributeModel
} = require('./attribute');
const {
    CategoryModel,
    CategoryDescriptionModel
} = require('./category');
const {
    InformationModel,
    InformationDescriptionModel
} = require('./information');
const {
    LanguageModel
} = require('./language');


const log4js = require('log4js');

log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'error.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const log = log4js.getLogger('db');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(db, user_db, user_password, {
    host,
    dialect, /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


let Customer = CustomerModel(sequelize, Sequelize);
let CustomerReward = CustomerRewardModel(sequelize, Sequelize);

let Order = OrderModel(sequelize, Sequelize);
let OrderStatus = OrderStatusModel(sequelize, Sequelize);
let OrderHistory = OrderHistoryModel(sequelize, Sequelize);
let OrderProduct = OrderProductModel(sequelize, Sequelize);
let OrderTotal = OrderTotalModel(sequelize, Sequelize);

let Manufacturer = ManufacturerModel(sequelize, Sequelize);
let ManufacturerDescription = ManufacturerDescriptionModel(sequelize, Sequelize);

let Category = CategoryModel(sequelize, Sequelize);
let CategoryDescription = CategoryDescriptionModel(sequelize, Sequelize);

let Information = InformationModel(sequelize, Sequelize);
let InformationDescription = InformationDescriptionModel(sequelize, Sequelize);

let Language = LanguageModel(sequelize, Sequelize);

let Product = ProductModel(sequelize, Sequelize);
let ProductAttribute = ProductAttributeModel(sequelize, Sequelize);
let ProductDescription = ProductDescriptionModel(sequelize, Sequelize);
let ProductDiscount = ProductDiscountModel(sequelize, Sequelize);
let ProductImage = ProductImageModel(sequelize, Sequelize);
let ProductSpecial = ProductSpecialModel(sequelize, Sequelize);
let ProductToCategory = ProductToCategoryModel(sequelize, Sequelize);

let AttributeGroupDescription = AttributeGroupDescriptionModel(sequelize, Sequelize);
let AttributeDescription = AttributeDescriptionModel(sequelize, Sequelize);
let Attribute = AttributeModel(sequelize, Sequelize);

let Article = ArticleModel(sequelize, Sequelize),
    ArticleDescription = ArticleDescriptionModel(sequelize, Sequelize);



sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    }).catch(function(reason) {
    // отказ
    log.error("Error name: " + reason.name + " Address: " + reason.parent.address + " Port: " + reason.parent.port + " Syscall: " + reason.parent.syscall);
});

module.exports = {
    Customer,
    CustomerReward,

    Order,
    OrderStatus,
    OrderHistory,
    OrderProduct,
    OrderTotal,

    Manufacturer,
    ManufacturerDescription,

    Category,
    CategoryDescription,

    Information,
    InformationDescription,

    Language,

    Product,
    ProductAttribute,
    ProductDescription,
    ProductDiscount,
    ProductImage,
    ProductSpecial,
    ProductToCategory,

    AttributeGroupDescription,
    AttributeDescription,
    Attribute,

    Article,
    ArticleDescription
};