const {
    Category,
    CategoryDescription,
} = require("../models/db");

const log4js = require("log4js");
log4js.configure({
    appenders: { cheese: { type: "file", filename: "error.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } },
});

const log = log4js.getLogger("category",);

exports.category = async (req, res, next,) => {
};
exports.categories = async (req, res, next,) => {
};