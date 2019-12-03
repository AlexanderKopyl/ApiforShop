let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {categories,category,categories_parent} = require("../../controllers/CategoryController");

/* GET users listing. */
router.get("/", fun.verifyToken,categories);
router.get("/:id",fun.verifyToken, category);
router.get("/parent/:id",fun.verifyToken, categories_parent);

// router.get("/",categories);
// router.get("/:id",category);

module.exports = router;
