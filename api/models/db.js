const Sequelize = require('sequelize');
const {config: {prefix, db, user_db, user_password, host, dialect}} = require('../config/server.config');

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
  OrderTotalModel,
} = require('./order');

const {
  CustomerRewardModel,
  CustomerModel,
} = require('./customer');
const {
  ArticleModel,
  ArticleDescriptionModel,
} = require('./article');

const {
  ManufacturerModel,
  ManufacturerDescriptionModel,
} = require('./manufacturer');
const {
  AttributeGroupDescriptionModel,
  AttributeDescriptionModel,
  AttributeModel,
} = require('./attribute');
const {
  CategoryModel,
  CategoryDescriptionModel,
} = require('./category');
const {
  InformationModel,
  InformationDescriptionModel,
} = require('./information');
const {
  LanguageModel,
} = require('./language');


const log4js = require('log4js');

log4js.configure({
  appenders: {cheese: {type: 'file', filename: 'error.log'}},
  categories: {default: {appenders: ['cheese'], level: 'error'}},
});

const log = log4js.getLogger('db');

const sequelize = new Sequelize(db, user_db, user_password, {
  host,
  dialect, /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


const Customer = CustomerModel(sequelize, Sequelize);
const CustomerReward = CustomerRewardModel(sequelize, Sequelize);

const Order = OrderModel(sequelize, Sequelize);
const OrderStatus = OrderStatusModel(sequelize, Sequelize);
const OrderHistory = OrderHistoryModel(sequelize, Sequelize);
const OrderProduct = OrderProductModel(sequelize, Sequelize);
const OrderTotal = OrderTotalModel(sequelize, Sequelize);

const Manufacturer = ManufacturerModel(sequelize, Sequelize);
const ManufacturerDescription = ManufacturerDescriptionModel(sequelize, Sequelize);

const Category = CategoryModel(sequelize, Sequelize);
const CategoryDescription = CategoryDescriptionModel(sequelize, Sequelize);

const Information = InformationModel(sequelize, Sequelize);
const InformationDescription = InformationDescriptionModel(sequelize, Sequelize);

const Language = LanguageModel(sequelize, Sequelize);

const Product = ProductModel(sequelize, Sequelize);
const ProductAttribute = ProductAttributeModel(sequelize, Sequelize);
const ProductDescription = ProductDescriptionModel(sequelize, Sequelize);
const ProductDiscount = ProductDiscountModel(sequelize, Sequelize);
const ProductImage = ProductImageModel(sequelize, Sequelize);
const ProductSpecial = ProductSpecialModel(sequelize, Sequelize);
const ProductToCategory = ProductToCategoryModel(sequelize, Sequelize);

const AttributeGroupDescription = AttributeGroupDescriptionModel(sequelize, Sequelize);
const AttributeDescription = AttributeDescriptionModel(sequelize, Sequelize);
const Attribute = AttributeModel(sequelize, Sequelize);

const Article = ArticleModel(sequelize, Sequelize);
const ArticleDescription = ArticleDescriptionModel(sequelize, Sequelize);


sequelize.sync({force: false})
    .then(() => {
      console.log(`Database & tables created!`);
    }).catch(function(reason) {
    // отказ
      log.error('Error name: ' + reason.name + ' Address: ' + reason.parent.address + ' Port: ' + reason.parent.port + ' Syscall: ' + reason.parent.syscall);
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
  ArticleDescription,
};
