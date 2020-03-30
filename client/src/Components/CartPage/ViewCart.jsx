import React, { Component } from 'react';
import { Spinner, Row, Col, Container } from 'react-bootstrap';

class ViewCart extends Component {
  render() {
    const { cartdetls, totPrice } = this.props;
    console.log(this.props.cartdetls, totPrice, 'opt');

    return (
      <div className="">
        {cartdetls ? (
          <Container fluid>
            <Row className="rr">
              <Col lg={6} xs={24} className="p2">
                <h3>
                  <strong>Total: {totPrice}</strong>
                </h3>

                <div className="ticket">
                  <ul>
                    {cartdetls.map(item => {
                      return (
                        <li className="list-group-item">
                          {/* fit data not all item */}
                          <span className="badge">{{ item }}</span>
                          <span style="font-weight: bold">{{ item }}</span>
                          <span className="label label-success">
                            ${{ item }}
                          </span>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-primary btn-xs dropdown-toggle"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Action <span className="caret" />
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#">Reduce by 1</a>
                              </li>
                              <li>
                                <a href="#">Remove All</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Col>
              <Col lg={6} xs={24} className="p1">
                {' '}
                <button type="button" className="btn btn-success">
                  Checkout
                </button>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="saved-offer__spinner">
            {' '}
            <Spinner animation="border" variant="info" />
          </div>
        )}
      </div>
    );
  }
}
export default ViewCart;
