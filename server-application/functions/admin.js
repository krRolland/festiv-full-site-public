const admin = require("firebase-admin").initializeApp();
const db = admin.firestore();
const {config} = require("./config");
const firebase = require("firebase").initializeApp(config);
module.exports = {admin, db, firebase};
