const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}product`, {
    // customer_id:type.INTEGER,
    product_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: type.STRING,
    sku: type.STRING,
    upc: type.STRING,
    ean: type.STRING,
    jan: type.STRING,
    isbn: type.STRING,
    mpn: type.STRING,
    location: type.STRING,
    quantity: type.INTEGER,
    stock_status_id: type.INTEGER,
    image: type.STRING,
    manufacturer_id: type.INTEGER,
    shipping: type.BOOLEAN,
    price: type.DECIMAL(15, 4),
    points: type.INTEGER,
    weight: type.DECIMAL(15, 8),
    length: type.DECIMAL(15, 8),
    width: type.DECIMAL(15, 8),
    height: type.DECIMAL(15, 8),
    minimum: type.INTEGER,
    status: type.BOOLEAN,
    viewed: type.INTEGER(5),
  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}product`,
  });
};
