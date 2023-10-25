import express from "express";
import { OrderDao } from "../dao/OrderDao.js";

import { Order } from "../model/Order.js";
import { UserDao } from "../dao/UserDao.js";
import { ProductDao } from "../dao/ProductDao.js";

const orderDao = new OrderDao();
const userDao = new UserDao();
const productDao = new ProductDao();
const orders = express.Router();
orders.use(express.json());

orders.post("/", (req, res) => {
  const { idProduct, idUser } = req.body;
  const user = userDao.getById(idUser);
  const products = [];
  idProduct.forEach((prod) => {
    let product = productDao.getById(prod);
    if (product) {
      products.push(product);
    }
  });
  if (products.length > 0 && user) {
    const order = new Order(user, products);
    res.send(orderDao.addOrder(order));
  } else {
    res.sendStatus(404);
  }
});

orders.get("/:id", (req, res) => {
  let order = orderDao.getById(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.sendStatus(404).send("Non");
  }
});

export default orders;
