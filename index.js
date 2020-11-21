const express = require("express");
const app = express();
const firebase = require("./api/firebase.js");
const cors = require("cors");
const fs = require('fs').promises;
//const router = app.router();

app.use(cors());

app.get("/inventory", async (req, res) => {
  //const data = await firebase.getAllInventory();
  data = await readData();
  res.send(data);
});

const readData = async () => { 
  var data = await fs.readFile('./parsed.csv', 'utf8');
  

  return data;
}

app.listen(3001, () => {
  console.log("Listening...");
});
