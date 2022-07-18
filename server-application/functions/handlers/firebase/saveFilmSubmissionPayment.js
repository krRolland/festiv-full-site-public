const { db } = require("../../admin");

exports.saveFilmSubmissionPayment = (req, res) => {
  db.collection("film-submission-payments")
    .doc(req.body.purchaseId)
    .set(req.body)
    .then(() => {
      return res.json({ message: "successfully saved payment information" });
    })
    .catch((err) => {

      // Delete user if there was an error
      return res.json({ error: err.message });
    });
};
