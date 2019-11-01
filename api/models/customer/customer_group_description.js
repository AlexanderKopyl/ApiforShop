let {config: {prefix}} = require('../../config/server.config');
module.exports = (sequelize, type) => {
    return sequelize.define(`${prefix}customer_group_description`, {
        customer_group_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        description: type.TEXT,
    },{
        timestamps: false,

        freezeTableName: true,

        tableName: `${prefix}customer_group_description`
    })
};