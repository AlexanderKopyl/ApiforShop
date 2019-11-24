const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}category`, {
    // customer_id:type.INTEGER,
    category_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: type.STRING,
    parent_id: type.INTEGER(11),
    top: type.BOOLEAN,
    column: type.INTEGER(3),
    status: type.BOOLEAN,
    date_added: type.DATE,
    date_modified: type.DATE,
  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}category`,
  });
};
