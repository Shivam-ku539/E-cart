var express = require('express');
var router = express.Router();
var product=require('../db/product')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(product);
});

module.exports = router;
