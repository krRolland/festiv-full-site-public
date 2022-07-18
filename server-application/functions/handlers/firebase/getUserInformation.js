const {admin, db} = require("../../admin");
exports.getUserInformation = (req, res) => {
  let returnEmail;
  admin
    .auth()
    .getUser(req.body.uid)
    .then((dt) => {
      returnEmail = dt.email;
      db.collection("users")
        .doc(req.body.uid)
        .get()
        .then((collectionData) => {
          const moarData = collectionData._fieldsProto;
          const retData = {
            email: returnEmail,
            firstName: moarData.firstName.stringValue,
            lastName: moarData.lastName.stringValue,
            accountType: moarData.accountType.stringValue,
          };
          try {
            const val = moarData.imdbLink.stringValue;
            retData.imdbLink = val;
          }
          catch (e) { }
          return res.json(retData);
        })
        .catch((err) => {
          return res.json({ error: err.message });
        });
    })
    .catch((err) => {
      return res.json({ error: err.message });
    });
};
