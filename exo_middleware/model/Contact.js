export class Contact {
  static id = 1;
  constructor(lastName, firstName, phone, mail) {
    this.id = `${Contact.id++}`;
    this.lastName = lastName;
    this.firstName = firstName;
    this.phone = phone;
    this.mail = mail;
  }
}
