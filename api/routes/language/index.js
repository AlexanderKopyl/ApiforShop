let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {languages} = require("../../controllers/LanguageController");

/* GET users listing. */
// router.get("/", fun.verifyToken,languages);

router.get("/",languages);
// router.get("/:id",information);


module.exports = router;
