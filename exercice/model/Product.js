export class Product {
  static id = 1;
  constructor(title, price, quantity) {
    this.id = Product.id++;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
}
