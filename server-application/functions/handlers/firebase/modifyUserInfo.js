// const {admin, db, firebase} = require('../admin')

const {admin, db} = require("../../admin");

exports.modifyUserInfo = (req, res) => {
  // console.log(req.body);
  admin
    .auth()
    .updateUser(req.body.uid, {
      email: req.body.email,
    })
    .then(() => {
      const newUserInfo = req.body
      db.collection("users")
        .doc(req.body.uid)
        .set(newUserInfo, { merge: true });
    })
    .then(() => {
      return res.json({ message: "Account Info Modification Successful" });
    })
    .catch((err) => {
      return res.json({ error: err.message });
    });
};
