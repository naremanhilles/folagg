
const router = require('express').Router();

const {

  erros,
  products,
} = require('../controllers');

console.log(11111111111);
router.get('/products', products.getProducts);
router.get('/products/detalis/:productId', products.getProductDetalis);


router.use(erros.notFound);
router.use(erros.serverError);
module.exports = router;
