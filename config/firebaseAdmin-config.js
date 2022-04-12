import admin from "firebase-admin";
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";

// import serviceAccount from "./serviceAccountKey.json";

if ( !getApps().length ) {
  initializeApp({
      credential: applicationDefault(),
      // databaseURL: 'https://XXXXXXX.firebaseio.com'
  });
}

// if (!admin.apps.lenght) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       client_email: process.env.FIREBASE_CLIENT_EMAIL,
//       private_key: process.env.FIREBASE_PRIVATE_KEY,
//       project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     }),
//   });
// }

export default admin.firestore();
