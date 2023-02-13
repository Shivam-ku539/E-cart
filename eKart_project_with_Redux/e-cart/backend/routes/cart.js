// const { bindActionCreators } = require("@reduxjs/toolkit");
var express = require("express");
var router = express.Router();
var cart = require("../db/cart");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(cart);
});
router.post("/", function (req, res, next) {
  const { id, imageUrl, productName, prductBy, price } = req.body;
  // console.log(req.body)
  let result = {
    id: id,
    productName: productName,
    imageUrl: imageUrl,
    prductBy: prductBy,
    price: price,
    quantity: 1,
  };
  const itemIndex = cart.findIndex((item) => item.id === req.body.id);
  console.log(itemIndex);
  if (itemIndex >= 0) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push(result);
  }
});

module.exports = router;
