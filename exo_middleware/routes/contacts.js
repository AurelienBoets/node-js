import { ContactDao } from "../dao/ContactDao.js";
import express from "express";
import { Contact } from "../model/Contact.js";
import {
  authMiddleware,
  queryDateMiddleware,
} from "../middlewares/middlewares.js";

const contactDao = new ContactDao();
const contacts = express.Router();
contacts.use(queryDateMiddleware);
contacts.use(express.json());

contacts.get("/", (req, res) => {
  res.send(contactDao.getAll());
});

contacts.get("/:id", (req, res) => {
  res.send(contactDao.getById(req.params.id));
});

contacts.post("/", authMiddleware, (req, res) => {
  const { lastName, firstName, phone, mail } = req.body;
  let contact = new Contact(lastName, firstName, phone, mail);
  contactDao.add(contact);
});

contacts.put("/", authMiddleware, (req, res) => {
  const newContact = req.body;
  const isUpdate = contactDao.edit(newContact);
  if (isUpdate) {
    res.send(newContact);
  } else {
    res.sendStatus(404);
  }
});

export default contacts;
