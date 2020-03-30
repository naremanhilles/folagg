const Cart = require('./cart');

module.exports = (req, res) => {
  if (!req.session.cart) {
    res.send({
      error: null,
      products: null,
      totalPrice: null,
    });
  }
  const cart = new Cart(req.session.cart.items);
  res.send({
    error: null,
    products: cart.generateArray(),
    totalPrice: cart.totalPrice,
  });
};
