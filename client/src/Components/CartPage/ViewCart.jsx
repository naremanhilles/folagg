import React, { Component } from 'react';

class ViewCart extends Component {
  reduceOneProduct = id => {
    this.props.reduceOneProduct(id);
  };

  removeProduct = id => {
    console.log(11, id);
    this.props.removeProduct(id);
  };

  render() {
    const { items, totalPrice, totalQty } = this.props;
    console.log(items, 44, 8);
    return (
      <>
        {items.length > 0 ? (
          <div>
            {items.map(item => {
              return (
                <div>
                  {item.item.map(itm => {
                    return (
                      <div className="btn-group">
                        <strong>{itm.title}</strong>
                        {/* <button
                              className="btn btn-primary btn-xs dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                            >
                              Action <span className="caret" />
                            </button> */}

                        <span onClick={() => this.reduceOneProduct(itm.id)}>
                          Reduce by 1
                        </span>

                        <span onClick={() => this.removeProduct(itm.id)}>
                          Remove All
                        </span>
                      </div>
                    );
                  })}
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
                      <strong>Total qty: {item.qty}</strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
                      <strong>Total price: {item.price}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row">
              <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
                <a href="/checkout">tot qun:{totalQty}</a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
                <a href="/checkout">tot p:{totalPrice}</a>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
                <a href="/checkout" type="button" className="btn btn-success">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
              <h2>No Items in Cart</h2>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ViewCart;
