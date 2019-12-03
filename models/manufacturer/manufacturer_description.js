let {config: {prefix}} = require("../../config/server.config");
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}manufacturer_description`, {
        // customer_id:type.INTEGER,
        manufacturer_id: {
            type: type.INTEGER,
            primaryKey: true,
        },
        language_id: type.INTEGER,

        description: type.STRING,
        description3: type.STRING,
        meta_description: type.STRING,
        meta_keyword: type.STRING,
        meta_title: type.STRING,
        meta_h1: type.STRING,
    },{
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: `${prefix}manufacturer_description`
    });
};