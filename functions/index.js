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
        displayName: "John Dor",
        photoURL: "http://www.example.com/12345678/photo.png",
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
  });

  
exports.userSaver = functions.auth.user().onCreate(async user => {
  console.log(user)
  const firestore = admin.firestore()
  const userId = user.uid
  const userRef = firestore.collection("users").doc(userId)
  await userRef.set({
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
    customClaims: {},
    uid: user.uid,
  }).then(
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully added new user")
  )
  .catch((error) => {
    console.log("Error added new user:", error);
  });
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
