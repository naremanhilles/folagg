import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './style.css';

export default class SingleProduct extends Component {
  state = {
    detalis: [],
    message: '',
  };

  componentDidMount() {
    const productId = this.props.match.params.id;

    fetch(`/products/detalis/${productId}`)
      .then(res => res.json())
      .then(({ data, error }) => {
        console.log(1, data);
        if (data) this.setState({ detalis: data });
        else this.setState({ message: error.msg });
      })
      .catch(er => {
        console.log(2, er);

        this.setState({ message: er.message });
      });
  }

  render() {
    const { detalis, message } = this.state;

    return (
      <>
        {/* {message && <Alert variant="danger">{message}</Alert>} */}
        <h2>jjjjjjj</h2>
        {/* {detalis ? (
          <h2>jjjj</h2>
            products.map(item => {
              return <ProductsCard items={item} />;
      })
    ) : (
            <div className="saved-offer__spinner">
          {' '}
          <Spinner animation="border" variant="info" />
        </div>
        )} */}
      </>
    );
  }
}
