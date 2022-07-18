const {admin, db, firebase} = require("../../admin");

exports.createNewUser = (req, res) => {
  // // Sends user credential back
  // return res.json({"Hello": "Hello"})
  let userId = "";
  // console.log("HERES THE REQUEST")
  // console.log(req.body)
  // console.log(req.body.email)
  admin
      .auth()
      .createUser({
        email: req.body.email,
        emailVerified: false,
        password: req.body.password,
        disabled: false,
      })
      .then((data) => {
      // Now That A User Has Been Created, Add More Info To A User Collection
        userId = data.uid;
        const newUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          accountType: req.body.accountType,
        };
        if (Object.prototype.hasOwnProperty.call(req.body, "imdbLink")) {
          newUser.imdbLink = req.body.imdbLink
        }
        db.collection("users")
            .doc(userId)
            .set(newUser)
            .catch((err) => {
            // Delete user if there was an error
              return res.json({error: err.message});
            });
      })
      .then(() => {
        firebase
            .auth()
            .signInWithEmailAndPassword(req.body.email, req.body.password)
            .then((data) => {
              return data.user.getIdToken();
            })
            .then((token) => {
              return res.json({token});
            });
      })
      .catch((err) => {
        // Erase User
        admin.auth().deleteUser(userId);
        // Return Error
        return res.json({error: err.message});
      });
};
