let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {product,products,product_attributes} = require("../../controllers/ProductController");

/* GET users listing. */
router.get("/", fun.verifyToken,products);
router.get("/:id",fun.verifyToken, product);
router.get("/attr/:id",fun.verifyToken,product_attributes);

// router.get("/",products);
// router.get("/:id",product);

module.exports = router;
