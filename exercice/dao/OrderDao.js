import fs from "fs";
import path from "path";

export class OrderDao {
  constructor() {
    this.file = path.resolve("./data/orders.json");
    this.orders = [];
  }

  readFile() {
    const file = fs.readFileSync(this.file, { encoding: "utf-8" });
    this.orders = JSON.parse(file);
  }

  writeFile() {
    fs.writeFileSync(this.file, JSON.stringify(this.orders));
  }

  addOrder(order) {
    this.orders.push(order);
    this.writeFile();
    return order;
  }

  getAll() {
    return this.orders;
  }

  getById(id) {
    return this.orders.find((order) => order.id == id);
  }
}
