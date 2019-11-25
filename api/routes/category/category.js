let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {categories,category} = require("../../controllers/CategoryController");

/* GET users listing. */
router.get("/", fun.verifyToken,categories);
router.get("/:id",fun.verifyToken, category);

// router.get("/",categories);
// router.get("/:id",category);

module.exports = router;
