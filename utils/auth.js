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
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";

export default function useProvideAuth() {
  const dispatch = useDispatch();

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        console.log(userAuth.user);
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            name: userAuth.user.displayName,
          })
        );
        // history.replace("/");
        alert("Successfully Logged In");
      })
      .catch((error) => alert(error.message));
  };

    const signout = () => {
      return signOut(auth)
        .then(() => {
          dispatch(
            logout()
          );
        });
    };

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
    signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
