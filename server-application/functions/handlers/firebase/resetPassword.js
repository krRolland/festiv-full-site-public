const { firebase } = require("../../admin");
exports.resetPassword = (req, res) => {
  // console.log(req.body.email);
  firebase
    .auth()
    .sendPasswordResetEmail(req.body.email)
    .then(() => {
      return res.json({
        message: "A password reset link has been sent to your email. Thanks!",
      });
    })
    .catch((err) => {
      return res.json({ error: err.message });
    });
};
