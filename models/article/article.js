let {config: {prefix}} = require("../../config/server.config");
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}article`, {
        // customer_id:type.INTEGER,
        article_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: type.STRING,
        date_available: type.DATE,
        article_review: type.BOOLEAN,
        status: type.BOOLEAN,
        date_added: type.DATE,
        date_modified: type.DATE,
        viewed: type.INTEGER(5),
    },{
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: `${prefix}article`
    });
};