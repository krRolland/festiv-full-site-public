const {admin, db} = require("../../admin");
exports.deleteUser = (req, res) => {
    // Step 1: Get ID Associated With User. (This info should be stored in the req body) Step 2: Delete User By ID
    admin.auth()
    .deleteUser(req.body.uid)
    .then((res) => {
        res.send( {"message": "Account deletion successful"} )
    })
    .catch((error) => {
        return res.send( {error: error.message} )
    })

    // Step 3: Delete Collection With User Id
    db.collection('users').doc(req.body.uid).delete()
}
