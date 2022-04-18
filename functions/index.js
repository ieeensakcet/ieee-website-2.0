const functions = require("firebase-functions");
const { getAuth } = require("firebase-admin/auth");
const admin = require("firebase-admin");
admin.initializeApp();

exports.register = functions
  .region("us-central1")
  .https.onCall((data, context) => {
    admin
      .auth()
      .createUser({
        email: data.email,
        emailVerified: false,
        password: data.password,
        displayName: data.displayName,
        photoURL: "http://www.example.com/12345678/photo.png",
        disabled: false,
      })
      .then((userRecord) => {
        console.log(`Success user:${userRecord.uid} has been created`);
        // See the UserRecord reference doc for the contents of userRecord.
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
  });
exports.updateUserRole = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success ${data.email} has been made an admin`,
      };
    })
    .catch((error) => {
      return error;
    });
});
exports.addDefaultUserRole = functions.auth.user().onCreate((user) => {
  let uid = user.uid;

  //add custom claims
  return admin
    .auth()
    .setCustomUserClaims(uid, {
      isMember: true,
    })
    .then(() => {
      //Interesting to note: we need to re-fetch the userRecord, as the user variable **does not** hold the claim
      return admin.auth().getUser(uid);
    })
    .then((userRecord) => {
      console.log(uid);
      console.log(userRecord.customClaims.isMember);
      return null;
    });
});

// exports.removeUser = functions.firestore
//   .document("/users/{uid}")
//   .onDelete((snapshot, context) => {
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//       databaseURL: "https://<DATABASE_NAME>>.firebaseio.com",
//     });
//     return admin.auth().deleteUser(context.params.uid);
//   });

exports.deleteUserAuth = functions.auth.https.onCall((data, context) => {
  user = admin.auth().getUserByEmail(data.email)
  return admin.auth.deleteUser(user.uid)
})


