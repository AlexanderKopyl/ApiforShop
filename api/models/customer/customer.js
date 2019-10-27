let {config: {prefix}} = require('../../server.config');
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}user`, {
        user_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING
    },{
        timestamps: false,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,

        // define the table's name
        tableName: `${prefix}user`
    })
};