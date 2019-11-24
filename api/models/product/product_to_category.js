const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}product_to_category`, {
    // customer_id:type.INTEGER,
    product_id: {
      type: type.INTEGER,
      primaryKey: true,
    },
    category_id: type.INTEGER,
    main_category: type.BOOLEAN,
  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}product_to_category`,
  });
};
