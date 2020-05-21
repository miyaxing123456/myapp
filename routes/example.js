var express = require('express');
var router = express.Router();
var fs = require("fs");


router.get('/', function(req, res, next) {
  res.render('example');
});
 router.get('/:name', function(req, res, next) {
   let name=req.params.name;
   if(name==="waimai"){
    res.render('waimai/index/index.ejs');
   }else{
    res.render(name);
   }
 });
 router.get('/data/:data', function(req, res, next) {
  let data=req.params.data;
  var con = fs.readFileSync(`./public/waimai/json/${data}.json`, "utf8");
    con = JSON.parse(con);
  console.log(1);
  res.json(con);
});
router.get('/waimai/order', function(req, res, next) {

  res.render(`waimai/order/order.ejs`);
});
router.get('/waimai/my', function(req, res, next) {

  res.render(`waimai/my/my.ejs`);
});
router.get('/waimai/index', function(req, res, next) {

  res.render(`waimai/index/index.ejs`);
});
router.get('/waimai/menu', function(req, res, next) {
  res.render(`waimai/menu/menu.ejs`);
});

module.exports = router;