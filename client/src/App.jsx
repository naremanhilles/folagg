import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrdersManagement from './Components/Layouts/Ordersmanagement';
import SingleCastomer from './Components/Layouts/SingleCustomer';
import InProgress from './Components/Layouts/ToBuildLater';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Layouts/Login';
import NewOrdersManagement from './Components/Layouts/NewOrdersmanagement';

import Customers from './Components/Layouts/Customers/index';

import {
  LandingPage,
  Header,
  Footer,
  PageNotFound,
  SingleProduct,
  CartPage,
  Sucsses,
  Fail,
} from './Components';
import Home from './Components/Layouts/Home';

import CheckoutForm from './Components/CheckoutForm/CheckoutForm';
import RedirectForm from './Components/CheckoutForm/RedirectForm';

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
      <div>
        <Router>
          {/* <Header totalQty={this.state.totalQty} /> */}
          <div className="body-container">
            <Switch>
              <Route path="/login" component={Login} exact />
              <Route exact path="/customers" component={Customers} />
              <Route path="/neworders" component={NewOrdersManagement} exact />

              <Route path="/orders" component={OrdersManagement} exact />
              <Route
                exact
                path="/customers/profile/:id"
                component={SingleCastomer}
              />
              <Route path="/control" component={Home} exact />

              <Route exact path="/in-progress" component={InProgress} />

              <Route
                exact
                path="/"
                component={routerProps => (
                  <LandingPage totalQty={this.state.totalQty} />
                )}
              />
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
                path="/products/detalis/:id"
                component={routerProps => (
                  <SingleProduct
                    id={routerProps.match.params.id}
                    addToCart={this.addToCart}
                  />
                )}
              />
              <Route exact path="/succsses" component={Sucsses} />
              <Route exact path="/fail" component={Fail} />

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
              <Route
                exact
                path="/checkout"
                component={() => <CheckoutForm />}
              />
              <Route exact path="/redirect-checkout" component={RedirectForm} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}
