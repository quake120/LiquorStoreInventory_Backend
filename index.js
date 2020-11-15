const express = require("express");
const app = express();
const firebase = require("./api/firebase.js");
const cors = require("cors");
//const router = app.router();

app.use(cors());

app.get("/inventory", async (req, res) => {
  const data = await firebase.getAllInventory();
  res.send(data);
});

app.listen(3001, () => {
  console.log("Listening...");
});
