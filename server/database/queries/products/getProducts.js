const connection = require('../../config/db_connection');

const getProducts = () => connection.query('select * from products');

module.exports = { getProducts };
