const {
    Information,
    InformationDescription,
} = require("../models/db");

const log4js = require("log4js");
const {Op} = require("sequelize");

log4js.configure({
    appenders: { cheese: { type: "file", filename: "error.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" }},
});

const log = log4js.getLogger("information");
let result = null;

InformationDescription.hasMany(Information, {foreignKey: "information_id"});
Information.belongsTo(InformationDescription, {foreignKey: "information_id",targetKey: "information_id"});

exports.information = async (req, res, next) => {
    try{
        result = await Information.findOne({where: {information_id: req.params.id},include: [InformationDescription]});
    }catch (e) {
        log.error("Error: " + e.message,);
    }
    finally {
        if(result !== null){
            res.json({
                message: "Articles find",
                result_code: 0,
                result,
            },);
        }else{
            res.sendStatus(404);
        }
    }
};
exports.informations = async (req, res, next) => {
    try{
        result = await Information.findAll({where: {status: {[Op.gt]: 0}},include: [InformationDescription]});
    }catch (e) {
        log.error("Error: " + e.message,);
    }
    finally {
        if(result !== null){
            res.json({
                message: "Information find",
                result_code: 0,
                result,
            },);
        }else{
            res.sendStatus(404);
        }
    }
};
