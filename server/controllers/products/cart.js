
module.exports = function Cart(oldCart) {
  console.log(1, oldCart.totalPrice);

  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function (item, id) {
    let storedItem = this.items[id];

    if (!storedItem) {
      console.log('ya');
      storedItem = this.items[id] = {
        item, qty: 0, price: 0, totpp: 0,
      };
    }
    storedItem.qty++;

    storedItem.price = storedItem.item[0].price;
    storedItem.totpp = storedItem.item[0].price * storedItem.qty;
    console.log(448, storedItem.totpp);
    this.totalQty++;
    console.log(88, this.totalPrice, storedItem.price);

    this.totalPrice += storedItem.price;
    console.log(8, this.totalPrice);
  };


  this.reduceByOne = function (id) {
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price;

    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };

  this.removeItem = function (id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };
  this.generateArray = function () {
    const arr = [];
    for (const id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
