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
import { login } from "../features/userSlice";

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
          })
        );
        // history.replace("/");
        alert("Successfully Logged In");
      })
      .catch((error) => alert(error.message));
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("created user", responce.user);
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
