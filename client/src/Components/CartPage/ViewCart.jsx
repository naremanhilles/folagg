import React, { Component } from 'react';
import empty from '../../assets/img/empty-shopping-cart-icon.webp';
import './style.css';

class ViewCart extends Component {
  reduceOneProduct = id => {
    this.props.reduceOneProduct(id);
  };

  removeProduct = id => {
    this.props.removeProduct(id);
  };

  render() {
    const { items, totalPrice, totalQty } = this.props;
    console.log(455441, items);
    return (
      <div className="container-fluid d-flex justify-content-center mr-30">
        {items.length > 0 ? (
          <div>
            <div className="">
              <div className="block-title">
                <h2 style={{ textAlign: 'center' }}>سلة الشراء</h2>
              </div>
            </div>
            {items.map(item => {
              return (
                <div className="kk">
                  <ul className="list">
                    {item.item.map(itm => {
                      return (
                        <>
                          <li className="">
                            <img
                              width="180px"
                              height="180px"
                              src={itm.imagepath}
                            />
                          </li>
                          <div className="flex m-tt">
                            <li>{itm.title}</li>
                            <li>
                              {' '}
                              <span
                                onClick={() => this.reduceOneProduct(itm.id)}
                              >
                                <i
                                  className="fa fa-minus-circle"
                                  aria-hidden="true"
                                />
                              </span>
                            </li>

                            <li>
                              {' '}
                              <span onClick={() => this.removeProduct(itm.id)}>
                                <i className="fa fa-trash" aria-hidden="true" />
                              </span>
                            </li>
                          </div>
                        </>
                      );
                    })}
                    <div className="flex m-tt">
                      <li className="">الكمية: {item.qty}</li>

                      <li className="">
                        المبلغ الإجمالي:
                        <span style={{ color: '#a22a5f' }}>${item.totpp} </span>
                      </li>
                    </div>
                  </ul>
                </div>
              );
            })}

            <div className="" style={{ textAlign: 'right' }}>
              <div className="">الكمية الإجمالية:{totalQty}</div>
              <div className="">$السعر الإجمالي:{totalPrice}</div>
            </div>

            <div className="" style={{ textAlign: 'right' }}>
              <a href="/checkout" type="button" className="btn btn-success">
                الدفع
              </a>
            </div>
          </div>
        ) : (
          <div className="emptycontainer">
            <img src={empty} />
            <h1 className="block-title">: سلة التسوق فارغة</h1>
            <div className="description">
              : لا يوجد أي منتجات في السلة، لماذا لا تقوم بتعبئتها
            </div>
            <a className="bttn" href="/">
              متابعة التسوق
            </a>
          </div>
        )}
      </div>
    );
  }
}
export default ViewCart;
