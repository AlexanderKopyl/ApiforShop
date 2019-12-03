let {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}order_history`, {
        // customer_id:type.INTEGER,
        order_history_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: type.INTEGER,
        order_status_id: type.INTEGER,
        comment: type.TEXT,
        date_added: type.DATE,

    },{
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: `${prefix}order_status`
    })
};