const connection = require('../../config/db_connection');

const getProductDetalis = productId => connection.query('select * from products where products.id=$1', [productId]);

module.exports = { getProductDetalis };
