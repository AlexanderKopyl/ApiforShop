let {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}customer`, {
        customer_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        telephone: type.STRING,
        password: type.STRING,
        salt: type.STRING,
        status: type.BOOLEAN,
    },{
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: `${prefix}customer`
    })
};