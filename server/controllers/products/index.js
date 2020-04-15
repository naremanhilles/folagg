const getProducts = require('./getProducts');
const getProductDetalis = require('./getProductDetails');
const getProductCart = require('./getProductCart');
const reduceOne = require('./reduceOne');
const removeProduct = require('./removeProduct');
const checkout_form = require('./checkout_form');
const redirect_checkout = require('./redirect_checkout')
// const checkOut = require('./checkOut');

module.exports = {
  getProducts,
  getProductDetalis,
  getProductCart,
  reduceOne,
  // checkOut,
  removeProduct,
  checkout_form,
  redirect_checkout
};
