import express from "express";
import users from "./route/users.js";
import products from "./route/products.js";
import orders from "./route/orders.js";
import { OrderDao } from "./dao/OrderDao.js";
import { UserDao } from "./dao/UserDao.js";
import { ProductDao } from "./dao/ProductDao.js";

const app = express();
const orderDao = new OrderDao();
const userDao = new UserDao();
const productDao = new ProductDao();
app.use(express.json());
app.use("/users", users);
app.use("/products", products);
app.use("/orders", orders);

app.listen("3000", () => {
  console.log("run at http://127.0.0.1:3000");
  productDao.readFile();
  userDao.readFile();
});
