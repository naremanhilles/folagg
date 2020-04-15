import React, { Component } from 'react';
import Script from 'react-load-script';
import queryString from 'query-string';

export default class RedirectForm extends Component {
  state = {
    success: false,
  };
  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: params.id }),
    };
    fetch(`api/v1/redirect-checkout-form`, requestOptions)
      .then(res => res.json())
      .then(res => console.log({ res }))
      .catch(er => {
        console.log('44444', er);
      });
  }

  render() {
    return <p>SSSS</p>;
  }
}
