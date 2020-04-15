/* eslint-disable no-undef */
import React, { Component } from 'react';
import Script from 'react-load-script';

export default class CheckoutForm extends Component {
  state = {
    checkoutId: '',
    scriptLoaded: false,
    name: '',
    phone: '',
    address: '',
    form: false,
  };
  // 
  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: '92.00' }),
    };
    fetch(`api/v1/checkout-form`,requestOptions)
      .then(res => res.json())
      .then(res => this.setState({ checkoutId: res.id }))
      .catch(er => {
        console.log('44444', er);
      });
  }

  handelChange = e => this.setState({ [e.target.name]: e.target.value });

  onLoad = () => this.setState({ scriptLoaded: true });

  nextStep = () => this.setState({ form: true });

  render() {
    const { checkoutId, scriptLoaded, name, phone, address, form } = this.state;
    const src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    return checkoutId ? (
      <>
        <Script
          url={src}
          onCreate={() => {}}
          onError={() => {}}
          onLoad={this.onLoad}
        />
        {/* {!form && (
          <div style={{ height: '500px' }}>
            <input type="text" name="name" onChange={this.handelChange} />
            <input type="text" name="phone" onChange={this.handelChange} />
            <input type="text" name="address" onChange={this.handelChange} />
            <button
              disabled={name && phone && address ? false : true}
              onClick={this.nextStep}
            >
              التالي
            </button>
          </div>
        )} */}
        {scriptLoaded && (
          <form
            action="/redirect-checkout"
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          />
        )}
      </>
    ) : (
      <p>Loading...</p>
    );
  }
}
