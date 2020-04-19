/* eslint-disable no-undef */
import React, { Component } from 'react';

import { Spinner } from 'react-bootstrap';

import Script from 'react-load-script';
import WrappedComponent from '../HOC/withHeader';
import './style.css';

class CheckoutForm extends Component {
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
    console.log(87, this.props.totalPrice);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: this.props.totalPrice }),
    };
    fetch(`api/v1/checkout-form`, requestOptions)
      .then(res => res.json())
      .then(res => this.setState({ checkoutId: res.id }))
      .catch(er => {
        console.log('44444', er);
      });
  }

  handelChange = e => {
    console.log(7777);
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoad = () => this.setState({ scriptLoaded: true });

  nextStep = () => {
    console.log(this.props.infor);
    const { name, phone, address } = this.state;
    this.setState({ form: true }, () => {
      this.props.infor(name, phone, address);
    });
  };

  render() {
    console.log('yaaaaaaa', this.state.form);
    const { infor } = this.props;

    const { checkoutId, scriptLoaded, name, phone, address, form } = this.state;
    const src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    return checkoutId ? (
      <div style={{ display: 'flex', height: '' }}>
        {!form && (
          <div style={{ width: '50%', textAlign: 'center', marginTop: '0px' }}>
            <form className="pay-form" onSubmit={this.handleSubmit}>
              <label>
                أدخل اسمك:
                <input
                  value={this.state.name}
                  onChange={this.handelChange}
                  name="name"
                  type="text"
                />
              </label>
              <label>
                أدخل عنوانك:
                <input
                  value={this.state.address}
                  onChange={this.handelChange}
                  type="text"
                  name="address"
                />
              </label>
              <label>
                الهاتف المحمول:
                <input
                  value={this.state.phone}
                  onChange={this.handelChange}
                  style={{ width: '43%' }}
                  type="text"
                  name="phone"
                />
              </label>
              <button
                disabled={!(name && phone && address)}
                onClick={this.nextStep}
              >
                التالي
              </button>
            </form>
          </div>
        )}
        {form && (
          <div style={{ width: '50%' }} className="pay-div">
            <Script
              url={src}
              onCreate={() => {}}
              onError={() => {}}
              onLoad={this.onLoad}
            />

            {scriptLoaded && (
              <form
                action="/redirect-checkout"
                className="paymentWidgets"
                data-brands="VISA MASTER AMEX"
              />
            )}
          </div>
        )}
      </div>
    ) : (
      <div className="saved-offer__spinner">
        {' '}
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
}
export default WrappedComponent(CheckoutForm);
