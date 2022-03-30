import React, { useState, useEffect, useContext, createContext } from "react";
// import queryString from "query-string";
// import * as firebase from "firebase/app";
// import "firebase/auth";

import { auth } from "../config/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// import prod from "../.firebase/prod.json";

// if (!firebase.apps.length) {
//   firebase.initializeApp(prod);
// }

// const authContext = createContext();

// export function ProvideAuth() {
//   const auth = useProvideAuth();
//   // return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

// export const useAuth = () => {
//   return useContext(authContext);
// };

export default function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        alert("Successfully Logged In");
        setUser(response.user);
        return response.user;
      })
      .catch((error) => alert(error.message));
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("created user", responce.user)
        // setUser(response.user);
        signOut();
        return response.user;
      })
      .catch((error) => alert(error.message));
  };

  //   const signout = () => {
  //     return firebase
  //       .auth()
  //       .signOut()
  //       .then(() => {
  //         setUser(false);
  //       });
  //   };

  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  //   const confirmPasswordReset = (password, code) => {
  //     const resetCode = code || getFromQueryString("oobCode");

  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(resetCode, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  //   useEffect(() => {
  //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //         setUser(false);
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, []);

  return {
    // userId: user && user.uid,
    signin,
    signup,
    // signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
