const express = require("express");
const app = express();
const functions = require("firebase-functions");
const cors = require("cors");
app.use(cors({ origin: true }));

const { FBauth } = require("./handlers/firebase/FBauth");

const { signIn } = require("./handlers/firebase/signIn");
const { createNewUser } = require("./handlers/firebase/createNewUser");
const {
  getUserInformation,
} = require("./handlers/firebase/getUserInformation");
const { modifyUserInfo } = require("./handlers/firebase/modifyUserInfo");
const { resetPassword } = require("./handlers/firebase/resetPassword");
const {
  saveFilmSubmissionPayment,
} = require("./handlers/firebase/saveFilmSubmissionPayment");
const { deleteUser } = require("./handlers/firebase/deleteUser");

app.post("/signIn", signIn);
app.post("/createNewUser", createNewUser);
app.post("/getUserInformation", FBauth, getUserInformation);
app.post("/modifyUserInfo", FBauth, modifyUserInfo);
app.post("/resetPassword", resetPassword);
app.post("/saveFilmSubmissionPayment", saveFilmSubmissionPayment);
app.post("/deleteUser", FBauth, deleteUser)

// Final Express-related line Call
exports.api = functions.https.onRequest(app);
