const connection = require('../../config/dbConnection');

exports.countCustomers = () => connection.query('SELECT COUNT(pk_i_id) FROM tuser');
