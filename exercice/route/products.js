import express from "express";
import { ProductDao } from "../dao/ProductDao.js";
import { Product } from "../model/Product.js";

const productDao = new ProductDao();
const products = express.Router();
products.use(express.json());

products.post("/", (req, res) => {
  const { title, price, quantity } = req.body;
  let product = new Product(title, price, quantity);
  res.send(productDao.addProduct(product));
});

products.get("/:id", (req, res) => {
  if (productDao.getById(req.params.id)) {
    res.send(productDao.getById(req.params.id));
  }
  res.sendStatus(404).send("Le produit est introuvable");
});

export default products;
