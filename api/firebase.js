const firebase = require("firebase-admin");

var accountCert = require("./accountkey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(accountCert),
  databaseURL: "https://udabc-inventory.firebaseio.com",
});

const db = firebase.firestore();

const getAllInventory = async () => {
  let data = [];
  const inventoryRef = db.collection("inventory");
  let inventoryData = await inventoryRef.get();
  inventoryData.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

exports.getAllInventory = getAllInventory;
