import express from "express";
import { UserDao } from "../dao/UserDao.js";
import { User } from "../model/User.js";

const userDao = new UserDao();
const users = express.Router();
users.use(express.json());

users.get("/", (req, res) => {
  res.send(userDao.getAll());
});

users.get("/:id", (req, res) => {
  if (userDao.getById(req.params.id)) {
    res.send(userDao.getById(req.params.id));
  }
  res.sendStatus(404).send("Aucun utilisateur trouvé");
});

users.post("/", (req, res) => {
  const { firstName, lastName, phone } = req.body;

  let user = new User(firstName, lastName, phone);
  res.send(userDao.addUser(user));
});

export default users;
