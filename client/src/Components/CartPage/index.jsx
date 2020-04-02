import React, { Component } from 'react';
// import './style.css';
import ViewCart from './ViewCart';

export default class CartPage extends Component {
  state = {
    items: [],
    totalPrice: null,
    totalQty: null,
    message: '',
  };

  reduceOneProduct = id => {
    fetch(`/api/v1/reduce/${id}`)
      .then(res => res.json())
      .then(({ value }) => {
        if (value) this.setState({ sucsess: value });
        window.location = '/shopping-cart';
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  };

  removeProduct = id => {
    console.log(22, id);

    fetch(`/api/v1/remove/${id}`)
      .then(res => res.json())
      .then(({ value }) => {
        console.log(33, value);
        if (value) this.setState({ sucsess: value });
        window.location = '/shopping-cart';
      })
      .catch(er => {
        console.log(44, er);
        this.setState({ message: er.message });
      });
  };

  componentDidMount() {
    fetch('/api/v1/session/value')
      .then(res => res.json())
      .then(({ value }) => {
        // pop up in single page
        // price number
        if (value) {
          const arr = [];
          const obj = value.items;
          Object.keys(obj).map((key, index) => {
            arr.push(obj[key]);
          });
          this.setState({
            items: arr,
            totalPrice: value.totalPrice,
            totalQty: value.totalQty,
          });
        } else this.setState({ message: 'empt cart' });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  }

  render() {
    const { items, totalPrice, totalQty } = this.state;
    return (
      <ViewCart
        reduceOneProduct={this.reduceOneProduct}
        removeProduct={this.removeProduct}
        items={items}
        totalPrice={totalPrice}
        totalQty={totalQty}
      />
    );
  }
}
