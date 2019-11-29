const {
    Category,
    CategoryDescription,
} = require("../models/db");

const {Op} = require("sequelize");
const log4js = require("log4js");
let result = null;

log4js.configure({
    appenders: { cheese: { type: "file", filename: "error.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } },
});

const log = log4js.getLogger("category",);

CategoryDescription.hasMany(Category, {foreignKey: "category_id"});
Category.belongsTo(CategoryDescription, {foreignKey: "category_id",targetKey: "category_id"});

exports.category = async (req, res) => {
    try{
        result = await Category.findOne({
            where: {category_id: req.params.id},
            include: [
                {
                    model:CategoryDescription,
                    where:{language_id:1}
                }
            ]
        });
    }catch (e) {
        log.error("Error: " + e.message,);
    }
    finally {
        if(result !== null){
            res.json({
                message: "Category find",
                result_code: 0,
                result,
            },);
        }else{
            res.sendStatus(404);
        }
    }
};
exports.categories = async (req, res) => {
    try{
        result = await Category.findAll({
            where: {status: {[Op.gt]: 0}},
            attributes: ["category_id","image","parent_id"],
            include: [
                {
                    model:CategoryDescription,
                    where:{
                        language_id:1

                    }
                }
            ]
        });
    }catch (e) {
        log.error("Error: " + e.message,);
    }
    finally {
        if(result !== null){
            res.json({
                message: "Category find",
                result_code: 0,
                result,
            },);
        }else{
            res.sendStatus(404);
        }
    }
};
exports.categories_parent = async (req, res) => {

    try{
        result = await Category.findAll({
            where: {[Op.and]: [{parent_id: req.params.id}, {status: {[Op.gt]: 0}}]},
            attributes: ["category_id","image","parent_id"],
            include: [
                {
                    model:CategoryDescription,
                    where:{
                        language_id:1

                    }
                }
            ]
        });
    }catch (e) {
        log.error("Error: " + e.message,);
    }
    finally {
        if(result !== null){
            res.json({
                message: "Category find",
                result_code: 0,
                result,
            },);
        }else{
            res.sendStatus(404);
        }
    }
};