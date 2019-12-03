const {
    Article,
    ArticleDescription,
} = require("../models/db");

const {Op} = require("sequelize");

const log4js = require("log4js");
let result = null;

log4js.configure({
    appenders: { cheese: { type: "file", filename: "error.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } },
});

const log = log4js.getLogger("article");


ArticleDescription.hasMany(Article, {foreignKey: "article_id"});
Article.belongsTo(ArticleDescription, {foreignKey: "article_id",targetKey: "article_id"});

exports.latest_artticles = async (req, res) => {
    try{
        result = await Article.findAll({where: {status: {[Op.gt]: 0}},include: [ArticleDescription]});
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
exports.article = async (req, res) => {
    try{
        result = await Article.findOne({where: {article_id: req.params.id},include: [ArticleDescription]});
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