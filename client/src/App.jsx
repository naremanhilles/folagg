import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  LandingPage,
  Header,
  Footer,
  PageNotFound,
  SingleProduct,
  CartPage,
} from './Components';

export default class App extends Component {
  state = {
    items: [],
    totalQty: null,
    totalPrice: null,
    sucsess: null,
    message: '',
  };

  componentDidMount() {
    fetch('/api/v1/session/value')
      .then(res => res.json())
      .then(({ value }) => {
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

  reduceOneProduct = id => {
    fetch(`/api/v1/reduce/${id}`)
      .then(res => res.json())

      .then(({ value }) => {
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
  };

  addToCart = id => {
    fetch(`/api/v1/products/addToCart/${id}`)
      .then(res => res.json())
      .then(({ value }) => {
        if (value) {
          const arr = [];
          const obj = value.items;
          Object.keys(obj).map((key, index) => {
            arr.push(obj[key]);
          });
          console.log(11, value.totalPrice);

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
  };

  removeProduct = id => {
    console.log(22, id);

    fetch(`/api/v1/remove/${id}`)
      .then(res => res.json())
      .then(({ value }) => {
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
        console.log(44, er);
        this.setState({ message: er.message });
      });
  };

  render() {
    return (
      <>
        <Router>
          <Header totalQty={this.state.totalQty} />
          <div className="body-container">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route
                exact
                path="/products/detalis/:id"
                component={routerProps => (
                  <SingleProduct
                    id={routerProps.match.params.id}
                    addToCart={this.addToCart}
                  />
                )}
              />
              <Route
                exact
                path="/shopping-cart"
                component={() => (
                  <CartPage
                    removeProduct={this.removeProduct}
                    reduceOneProduct={this.reduceOneProduct}
                    items={this.state.items}
                    totalPrice={this.state.totalPrice}
                    totalQty={this.state.totalQty}
                  />
                )}
              />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </>
    );
  }
}
