
const router = require('express').Router();

const {

  erros,
  products,
} = require('../controllers');

router.get('/products', products.getProducts);
router.get('/products/detalis/:productId', products.getProductDetalis);
router.get('/shopping-cart', products.getShopCart);

router.get('/products/addToCart/:prodId', products.getProductCart);

router.use(erros.notFound);
router.use(erros.serverError);
module.exports = router;
