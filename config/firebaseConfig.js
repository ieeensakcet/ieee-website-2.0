// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/storage'
import { getAuth } from 'firebase/auth'       // for authentication

// import 'firebase/initializeApp'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
// const db = firebase.firestore()
// const storage = firebase.storage()
const auth = getAuth()

export { firebaseApp, auth }