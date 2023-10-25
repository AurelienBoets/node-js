import fs from "fs";
import path from "path";

export class UserDao {
  constructor() {
    this.file = path.resolve("./data/user.json");
    this.users = [];
  }

  readFile() {
    const file = fs.readFileSync(this.file, { encoding: "utf-8" });
    this.users = JSON.parse(file);
  }

  writeFile() {
    fs.writeFileSync(this.file, JSON.stringify(this.users));
  }

  getAll() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
    this.writeFile();
    return user;
  }

  getById(id) {
    this.readFile();
    return this.users.find((user) => user.id == id);
  }
}
