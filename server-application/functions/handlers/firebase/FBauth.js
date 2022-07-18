const {admin} = require("../../admin");

exports.FBauth = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    return res.json({error: "User unauthorized"});
  }

  admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        req.body.uid = decodedToken.uid;
        return next();
      // console.log('hi!!!!!!!!!!')
      })
      .catch((err) => res.json({error: err.message}));
};
