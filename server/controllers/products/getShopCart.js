
module.exports = (req, res) => {
  if (!req.session.cart) {
    res.send({
      value: null,
      error: null,
    });
  }

  res.send({
    value: res.locals.session.cart,
    error: null,
  });
};
