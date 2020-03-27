const { getProducts } = require('../../database/queries/products/index');


module.exports = (req, res, next) => {
  getProducts()
    .then((response) => {
      console.log(1111111111, response.rows);
      const productChunks = [];
      const products = response.rows;

      const chunkSize = 3;
      for (let i = 0; i < products.length; i += chunkSize) {
        productChunks.push(products.slice(i, i + chunkSize));
      }
      res.send({
        error: null,
        data: productChunks,
      });
    })
    .catch((err) => {
      console.log(2222222222, err);
      next(err);
    });
};
