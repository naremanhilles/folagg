const { getProductDetalis } = require('../../database/queries/products/index');

exports.getProductDetalis = (req, res, next) => {
  const { productId } = req.params;
  getProductDetalis(productId)
    .then((response) => {
      res.send({
        error: null,
        data: response.rows,
      });
    })
    .catch((err) => {
      next(err);
    });
};
