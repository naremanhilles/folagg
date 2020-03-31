import React, { Component } from 'react';
// import './style.css';
import ViewCart from './ViewCart';

export default class CartPage extends Component {
  state = {
    items: null,
    message: '',
    totalPrice: null,
    totalQty: null,
  };

  componentDidMount() {
    fetch('/api/v1/shopping-cart')
      .then(res => res.json())
      .then(({ value, error }) => {
        // pop up
        // price number

        if (value) {
          this.setState({
            items: value.items,
            totalPrice: value.totalPrice,
            totalQty: value.totalQty,
          });
        } else this.setState({ message: error.msg });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  }

  render() {
    const { items, totalPrice, totalQty } = this.state;
    return (
      <ViewCart items={items} totalPrice={totalPrice} totalQty={totalQty} />
    );
  }
}
