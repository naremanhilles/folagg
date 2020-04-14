const getProducts = require('./getProducts');
const getProductDetalis = require('./getProductDetails');
const getProductCart = require('./getProductCart');
const reduceOne = require('./reduceOne');
const removeProduct = require('./removeProduct');
const checkOut = require('./checkOut');

module.exports = {
  getProducts,
  getProductDetalis,
  getProductCart,
  reduceOne,
  checkOut,
  removeProduct,
};
