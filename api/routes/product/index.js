let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {product,products} = require("../../controllers/ProductController");

/* GET users listing. */
// router.get("/", fun.verifyToken,order_list);
// router.get("/:id",fun.verifyToken, order_detail);

router.get("/",products);
router.get("/:id",product);

module.exports = router;
