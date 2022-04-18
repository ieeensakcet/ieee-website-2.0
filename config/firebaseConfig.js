import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth' 
import { getFunctions } from 'firebase/functions';
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
//emulator firestore
connectFirestoreEmulator(db, 'localhost', 8080);

// const storage = firebase.storage()
const auth = getAuth()
const firebaseFunctions = getFunctions(firebaseApp);


export { firebaseApp, auth,  firebaseFunctions, db}