const { firebase } = require("../../admin");

exports.signIn = (req, res) => {
  // const user = {
  //   email: req.body.email,
  //   password: req.body.password,
  // };
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      return res.json({ error: err.message });
    });
};
