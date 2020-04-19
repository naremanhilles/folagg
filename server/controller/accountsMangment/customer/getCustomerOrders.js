const { getOrders } = require('../../../database/queries/customer/getCustomerOrders');
const { getOrderDetails } = require('../../../database/queries/order/getOrderDetails');

exports.getOrdersDetails = (req, res) => {
  const { id } = req.params;
  if (!id || !(/^[0-9]+$/.test(id))) {
    res.status(400).send({ error: 'Bad Request' });
  } else {
    getOrders(id)
      .then(({ rows, rowCount }) => {
        const result = [];
        rows.forEach(async (row) => {
          try {
            const data = await getOrderDetails(row.pk_i_id);
            result.push({ [row.pk_i_id]: data.rows[0] });
            console.log(data.rows[0], 'try', 'ressss');
          } catch (e) {
            res.status(500).send({ error: 'Internal Server Error' });
            console.log('cat', 88889999, e);
          }
          if (rowCount === result.length) res.send({ result });
        });
      })
      .catch(() => {
        res.status(500).send({ error: 'Internal Server Error' });
      });
  }
};
