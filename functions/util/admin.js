const admin = require('firebase-admin');
const serviceAccount = require("../socialape-591a9-firebase-adminsdk-z52ir-3f32e1a749.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL,
  storageBucket: process.env.STORAGEBUCKET
});

const db = admin.firestore();

module.exports = { admin, db};