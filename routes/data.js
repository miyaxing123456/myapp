var express = require('express');
var fs = require("fs");
var router = express.Router();




router.get('/:name', function(req, res, next) {
  let name=req.params.name;
  var con = fs.readFileSync(`./data/${name}.json`, "utf8");
    con = JSON.parse(con);
  console.log(1);
  res.json(con);
});

module.exports = router;