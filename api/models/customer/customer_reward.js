const {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
  return sequelize.define(`${prefix}customer_reward`, {
    customer_reward_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: type.INTEGER,
    order_id: type.INTEGER,
    description: type.TEXT,
    points: type.INTEGER,
    date_added: type.DATE,

  }, {
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: `${prefix}customer_reward`,
  });
};
