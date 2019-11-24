const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}order_product`, {
    order_product_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: type.INTEGER,
    product_id: type.INTEGER,
    name: type.STRING,
    model: type.STRING,
    quantity: type.INTEGER,
    price: type.DECIMAL(15, 4),
    total: type.DECIMAL(15, 4),

  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}order_product`,
  });
};
