export class Order {
  static id = 1;
  constructor(user, productList) {
    this.id = Order.id++;
    this.user = user;
    this.productList = productList;
  }
}
