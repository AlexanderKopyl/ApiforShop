const {
    Manufacturer,
    ManufacturerDescription,
} = require("../models/db");

const log4js = require("log4js");

log4js.configure({
    appenders: { cheese: { type: "file", filename: "error.log" }},
    categories: { default: { appenders: ["cheese",], level: "error"}},
},);

const log = log4js.getLogger("manufacturer");

exports.manufacturer = async (req, res, next) => {
};
exports.manufacturers = async (req, res, next) => {
};