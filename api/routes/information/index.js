let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {information,informations} = require("../../controllers/InformationController");

/* GET users listing. */
// router.get("/", fun.verifyToken,informations);
// router.get("/:id",fun.verifyToken, information);

router.get("/",informations);
router.get("/:id",information);


module.exports = router;
