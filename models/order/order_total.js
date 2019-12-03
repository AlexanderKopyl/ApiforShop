let {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}order`, {
        // customer_id:type.INTEGER,
        order_total_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: type.INTEGER,
        code: type.STRING,
        title: type.STRING,
        value: type.DECIMAL(15,4),



    },{
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: `${prefix}order`
    })
};