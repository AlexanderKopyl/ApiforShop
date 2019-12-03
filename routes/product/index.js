let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {product,products,product_attributes,product_to_categories} = require("../../controllers/ProductController");

/* GET users listing. */
router.get("/", fun.verifyToken,products);
router.get("/:id",fun.verifyToken, product);
router.get("/attr/:id",fun.verifyToken,product_attributes);
// router.get("/cat/:id",fun.verifyToken,product_to_categories);
router.get("/cat/:id",fun.verifyToken,product_to_categories);

// router.get("/",products);
// router.get("/:id",product);

module.exports = router;
