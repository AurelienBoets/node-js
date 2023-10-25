import { log } from "console";
import fs from "fs";
import path from "path";

export class ProductDao {
  constructor() {
    this.file = path.resolve("./data/product.json");
    this.products = [];
  }

  readFile() {
    const file = fs.readFileSync(this.file, { encoding: "utf-8" });
    this.products = JSON.parse(file);
  }

  writeFile() {
    fs.writeFileSync(this.file, JSON.stringify(this.products));
  }

  addProduct(product) {
    this.products.push(product);
    this.writeFile();
    return this.products;
  }

  getById(id) {
    this.readFile();
    return this.products.find((product) => product.id == id);
  }
}
