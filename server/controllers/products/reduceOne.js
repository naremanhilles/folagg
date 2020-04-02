const Cart = require('./cart');

module.exports = (req, res) => {
  const productId = req.params.id;


  const cart = new Cart(req.session.cart ? req.session.cart : {});


  cart.reduceByOne(productId);


  req.session.cart = cart;
  res.send({
    value: 'sucsses reduced',
  });
};
