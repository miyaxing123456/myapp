var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('game');
});
router.get('/:name', function(req, res, next) {
  let name=req.params.name;
  res.render(name);
});

module.exports = router;