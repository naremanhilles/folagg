import React, { Component } from 'react';
import Footer from '../Footer/index';

export default WrappedComponent =>
  class WrappedComponentWithNavSide extends Component {
    render() {
      return (
        <div className="">
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      );
    }
  };
