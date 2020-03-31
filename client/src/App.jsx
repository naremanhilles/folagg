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
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="body-container">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route
                exact
                path="/products/detalis/:id"
                component={SingleProduct}
              />
              <Route exact path="/shopping-cart" component={CartPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </>
    );
  }
}
