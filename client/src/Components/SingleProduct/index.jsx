import React, { Component } from 'react';
import { Alert, Row, Col, Button } from 'react-bootstrap';
import './style.css';

export default class SingleProduct extends Component {
  state = {
    detalis: [],
    message: '',
  };

  componentDidMount() {
    const productId = this.props.match.params.id;

    fetch(`/api/v1/products/detalis/${productId}`)
      .then(res => res.json())
      .then(({ data, error }) => {
        console.log('ren', data);
        if (data[0]) this.setState({ detalis: data });
        else this.setState({ message: error.msg });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  }

  render() {
    const { detalis, message } = this.state;
    console.log('detalies', detalis);
    const objdetl = this.state.detalis[0];
    console.log('obbbbb', objdetl);

    return (
      <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
        jjjj
        <div>{objdetl.title}</div>
        {/* <img src={this.objdetl.imagepath} />{' '} */}
        {/* {message && <Alert variant="danger">{message}</Alert>}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>{detalis.title}</h1>
        </div>
        <br />
        <Row gutter={[16, 16]}>
          <Col lg={12} xs={24}>
            <img src={this.details.imagepath} />{' '}
          </Col>
          <Col lg={12} xs={24}>
            <p title="Product Info">
              <p label="Price"> {this.details.price}</p>
              <p label="Sold">{this.details.title}</p>
              <p label="View"> {this.details.content}</p>
              <p label="Description"> {this.details.usemethod}</p>
            </p>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button size="large" shape="round" type="danger">
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row> */}
      </div>
    );
  }
}
