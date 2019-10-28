var express = require('express');
var router = express.Router();
var user = require('../../models/user/user').user;

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.selectAll()
      .then(
          (r) =>
              res.json(JSON.parse(JSON.stringify(r[0])))
      )
});
router.get('/:id', function (req, res, next) {

    user.selectById(+req.params.id)
        .then(
            (r) =>
                res.json(JSON.parse(JSON.stringify(r[0])))
        )

});

module.exports = router;
