import React, { Component } from 'react';
// import './style.css';
import ViewCart from './ViewCart';

export default class CartPage extends Component {
  state = {
    products: [],
    message: '',
    totalPrice: null,
  };

  componentDidMount() {
    const productId = this.props.match.params.id;

    fetch('/api/v1/shopping-cart')
      .then(res => res.json())
      .then(({ data, error, totPrice }) => {
        // log here
        if (data !== null)
          this.setState({ products: data, totalPrice: totPrice });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  }

  render() {
    const { products, totalPrice } = this.state;
    return <ViewCart cartdetls={products} totPrice={totalPrice} />;
  }
}
