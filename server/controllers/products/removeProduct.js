const Cart = require('./cart');

module.exports = (req, res) => {
  const productId = req.params.id;
  console.log(55, req.params.id);
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log(66, cart);
  cart.removeItem(productId);
  console.log(77, cart);
  req.session.cart = cart;


  if (!req.session.cart) {
    res.send({
      value: null,

    });
  }
  res.send({
    value: res.locals.session.cart,
  });
};
