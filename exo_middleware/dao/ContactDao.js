import fs from "fs";
import path from "path";

export class ContactDao {
  constructor() {
    this.file = path.resolve("./data/contact.csv");
    this.contacts = [];
  }

  readFile() {
    const file = fs.readFileSync(this.file, { encoding: "utf-8" });
    this.contacts = JSON.parse(file);
  }

  writeFile() {
    fs.writeFileSync(this.file, JSON.stringify(this.contacts));
  }

  getAll() {
    return this.contacts;
  }

  add(contact) {
    this.contacts.push(contact);
    this.writeFile();
  }

  getById(id) {
    const contact = this.contacts.find((contact) => contact.id === id);
    return contact;
  }

  edit(newContact) {
    const contact = this.getById(newContact.id);
    if (contact) {
      return false;
    }
    contact.title = newContact.title;
    contact.description = newContact.description;
    contact.endDate = newContact.endDate;
    contact.startDate = newContact.startDate;
    contact.state = newContact.state;
    this.writeFile();
    return true;
  }

  remove(id) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.writeFile();
  }
}
