export class User {
  static id = 1;
  constructor(firstName, lastName, phone) {
    this.id = User.id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
