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
        const firestore = admin.firestore();
        const userId = userRecord.uid;
        const userRef = firestore.collection("users").doc(userId);
        const role = data.role;
        userRef
          .set({
            email: userRecord.email,
            emailVerified: userRecord.emailVerified,
            displayName: userRecord.displayName,
            customClaims: data.role,
            membershipNumber: data.membershipNumber,
            uid: userRecord.uid,
          })
          .then((userId) => {
            // console.log(userId);
            admin.auth().setCustomUserClaims(userId, {
              role: true,
            })
          })
          .then(() => {
            //Interesting to note: we need to re-fetch the userRecord, as the user variable **does not** hold the claim
            return admin.auth().getUser(userId);
          })
          .catch((error) => {
            console.log("Error added new user:", error);
          });
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
  });

// exports.userSaver = functions.auth.user().onCreate(async (user) => {
//   const userId = user.uid;
//   return admin.auth().setCustomUserClaims(userId, {
//     isAdmin: true,
//   })
//   // await userRef
//   //   .set({
//   //     email: user.email,
//   //     emailVerified: user.emailVerified,
//   //     displayName: user.displayName,
//   //     customClaims: {},
//   //     uid: user.uid,
//   //   })
//     .then(() => {
//       //Interesting to note: we need to re-fetch the userRecord, as the user variable **does not** hold the claim
//       return admin.auth().getUser(userId);
//     })
//     .then((userRecord) => {
//       console.log(userId);
//       console.log(userRecord.customClaims.isAdmin);
//       return null;
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     });
// });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
