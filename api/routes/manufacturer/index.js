let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {manufacturer,manufacturers} = require("../../controllers/ManufacturerController");

/* GET users listing. */
// router.get("/", fun.verifyToken,manufacturers);
// router.get("/:id",fun.verifyToken, manufacturer);

router.get("/",manufacturers);
router.get("/:id",manufacturer);


module.exports = router;
