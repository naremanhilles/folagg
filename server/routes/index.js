
const router = require('express').Router();

const {

  erros,
  products,
} = require('../controllers');

router.get('/products', products.getProducts);

router.get('/session/value', (req, res, next) => {
  // req.session.cart = 0;
  if (!req.session.cart) {
    res.send({
      value: null,

    });
  }
  res.send({
    value: res.locals.session.cart,
  });
});

router.get('/products/detalis/:productId', products.getProductDetalis);
router.get('/reduce/:id', products.reduceOne);
// router.get('/chekout', products.checkOut);
console.log(87);
router.get('/remove/:id', products.removeProduct);
router.post('/checkout-form', products.checkout_form);
router.post('/redirect-checkout-form', products.redirect_checkout);

router.get('/products/addToCart/:prodId', products.getProductCart);

router.use(erros.notFound);
router.use(erros.serverError);
module.exports = router;
