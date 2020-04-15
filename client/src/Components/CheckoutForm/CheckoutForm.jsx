/* eslint-disable no-undef */
import React, { Component } from 'react';
import Script from 'react-load-script';

export default class CheckoutForm extends Component {
  state = {
    checkoutId: '',
    scriptLoaded: false
  };
  componentDidMount() {
    fetch(`api/v1/checkout-form`)
      .then((res) => res.json())
      .then((res) => this.setState({ checkoutId: res.id }))
      .catch((er) => {
        console.log('44444', er);
      });
  }

  onLoad = () => this.setState({ scriptLoaded: true });

  render() {
    const { checkoutId, scriptLoaded } = this.state;
    const src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    return checkoutId ? (
      <>
        <Script
          url={src}
          onCreate={() => { }}
          onError={() => { }}
          onLoad={this.onLoad}
        />
        {scriptLoaded && (
          <form
            action="/redirect-checkout"
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          />
        )
        }
      </>

    ) : (
        <p>Loading...</p>
      );
  }
}