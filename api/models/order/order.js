let {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}order`, {
        order_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id:type.INTEGER,
        firstname: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        telephone: type.STRING,
        order_status_id: type.INTEGER,
        date_added: type.DATE,
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