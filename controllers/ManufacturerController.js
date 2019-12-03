const {
    Manufacturer,
    ManufacturerDescription,
} = require("../models/db");

const log4js = require("log4js");
let result = null;

log4js.configure({
    appenders: { cheese: { type: "file", filename: "error.log" }},
    categories: { default: { appenders: ["cheese",], level: "error"}},
},);

const log = log4js.getLogger("manufacturer");

ManufacturerDescription.hasMany(Manufacturer, {foreignKey: "manufacturer_id"});
Manufacturer.belongsTo(ManufacturerDescription, {foreignKey: "manufacturer_id",targetKey: "manufacturer_id"});


exports.manufacturer = async (req, res, next) => {
    try{
        result = await Manufacturer.findOne({where: {manufacturer_id: req.params.id},include: [ManufacturerDescription]});
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
exports.manufacturers = async (req, res, next) => {
    try{
        result = await Manufacturer.findAll({include: [ManufacturerDescription]});
    }catch (e) {
        log.error("Error: " + e.message,);
    }
    finally {
        if(result !== null){
            res.json({
                message: "Manufacturer find",
                result_code: 0,
                result,
            },);
        }else{
            res.sendStatus(404);
        }
    }
};