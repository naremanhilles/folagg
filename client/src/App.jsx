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
} from './Components';

export default class App extends Component {
  state = {
    islogged: null,
  };

  render() {
    const { islogged } = this.state;
    return (
      <>
        <Router>
          <Header islogged={islogged} isLoggedOut={this.isLoggedOut} />
          <div className="body-container">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route
                exact
                path="/products/detalis/:id"
                component={SingleProduct}
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
