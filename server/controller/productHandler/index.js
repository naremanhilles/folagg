const express = require('express');
const { getProducts } = require('./getProducts');
const { getProductDetalis } = require('./getProductDetails');
const { reduceOne } = require('./reduceOne');
const { removeProduct } = require('./removeProduct');
const { checkoutForm } = require('./checkout_form');
const { redirectCheckout } = require('./redirect_checkout');
const { getProductCart } = require('./getProductCart');

const router = express.Router();

router.route('/products')
  .get(getProducts);
router.route('/products/detalis/:productId')
  .get(getProductDetalis);
router.route('/reduce/:id')
  .get(reduceOne);
router.route('/remove/:id')
  .get(removeProduct);
router.route('/checkout-form')
  .post(checkoutForm);
router.route('/redirect-checkout-form')
  .post(redirectCheckout);
router.route('/products/addToCart/:prodId')
  .get(getProductCart);

module.exports = router;
