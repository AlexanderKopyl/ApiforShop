let {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}product_image`, {
        // customer_id:type.INTEGER,
        product_image_id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: type.INTEGER,
        image: type.STRING,
    },{
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: `${prefix}product_image`
    })
};