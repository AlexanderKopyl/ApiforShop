const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}language`, {
    // customer_id:type.INTEGER,
    language_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    code: type.STRING,
    locale: type.STRING,
    image: type.DATE,
    directory: type.INTEGER,
    status: type.BOOLEAN,
  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}language`,
  });
};
