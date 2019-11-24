const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}product_attribute`, {
    // customer_id:type.INTEGER,
    product_id: {
      type: type.INTEGER,
      primaryKey: true,
    },
    attribute_id: {
      type: type.INTEGER,
      primaryKey: true,
    },
    language_id: {
      type: type.INTEGER,
      primaryKey: true,
    },
    text: type.TEXT,

  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}product_attribute`,
  });
};
