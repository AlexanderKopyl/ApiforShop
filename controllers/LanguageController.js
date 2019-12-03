const {
    Language,
} = require("../models/db");

const {Op} = require("sequelize");
const log4js = require("log4js");
let result = null;

log4js.configure({
    appenders: { cheese: { type: "file", filename: "error.log" }},
    categories: { default: { appenders: ["cheese"], level: "error"}},
},);

const log = log4js.getLogger("language");

exports.languages = async (req, res) => {
    try{
        result = await Language.findAll({where: {status: {[Op.gt]: 0}}});
    }catch (e) {
        log.error("Error: " + e.message,);
    }
    finally {
        if(result !== null){
            res.json({
                message: "Languages find",
                result_code: 0,
                result,
            },);
        }else{
            res.sendStatus(404);
        }
    }
};