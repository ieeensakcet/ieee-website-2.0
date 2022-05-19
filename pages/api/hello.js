// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../config/firebaseAdmin-config'
import { auth } from '../../config/firebaseConfig';


export default async function handler(req, res) {
  // const firebase = admin.firestore()
  console.log(req);
  // Return promise to handle serverless function timeouts
  // return new Promise((resolve, reject) => {
    //  firebase
   // set of operations
   auth
  .getUser(uid)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });
  }
// }
// export default async function  handler (_, res){
//   const snapshot = await db.collection('events').get()
//   const sites = []

//   snapshot.forEach((doc) => {
//     sites.push({id: doc.id, ...doc.data()})
//   });

//   res.status(200).json(sites);
// }

// export default function handler(req, res) {
//   const siteRef = db.collection('events')
//   res.status(200).json({ name: "John Doe", siteRef });
// }
