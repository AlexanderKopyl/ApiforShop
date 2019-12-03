let express = require("express");
let router = express.Router();
const fun = require("../../lib/function");
let {latest_artticles,article} = require("../../controllers/ArticleController");

/* GET users listing. */

router.get("/", fun.verifyToken,latest_artticles);
router.get("/:id",fun.verifyToken, article);

module.exports = router;