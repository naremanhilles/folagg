import React, { Component } from 'react';

class ViewCart extends Component {
  render() {
    const { items, totalPrice, totalQty } = this.props;
    console.log(items, 'oyyyyewpt');

    return (
      <div>
        {Object.keys(items).map((key, index) => {
          const myItem = items[key];
          return <h2>hhhhhhhhh</h2>;
        })}
      </div>
    );
  }
}
export default ViewCart;
