const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}manufacturer`, {
    // customer_id:type.INTEGER,
    manufacturer_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    image: type.STRING,
  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}manufacturer`,
  });
};
