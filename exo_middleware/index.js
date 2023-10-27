import express from "express";
import contacts from "./routes/contacts.js";
const app = express();
app.use(express.json());
app.use("/contacts", contacts);

app.listen("3000", () => {
  console.log("run at http://127.0.0.1:3000");
});
