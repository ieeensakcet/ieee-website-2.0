import { useState, useRef, useCallback, useEffect } from "react";
import useProvideAuth from "../../utils/auth";

//styles
import styles from "./CreateUser.module.css";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions";

export default function CreateUser({ showModal, setShowModal }) {
  const functions = getFunctions(getApp());
  connectFunctionsEmulator(functions, "localhost", 5001);
  const register = httpsCallable(functions, "register");
  const modalRef = useRef();
  // const dispatch = useDispatch()
  const auth = useProvideAuth();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const createUser = (e) => {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password) {
      alert("enter email and password");
      return;
    }
    // auth.signup(userInfo.email, userInfo.password);
    register({email: userInfo.email, password: userInfo.password}).then((result) => {
      // Read result of the Cloud Function.
      /** @type {any} */
      const data = result.data;
      const sanitizedMessage = data.text;
    })
    .catch((error) => {
      // Getting the Error details.
      const code = error.code;
      const message = error.message;
      const details = error.details;
      // ...
    });
  };

  const onInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
  };
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          className={styles.modal__background}
          onClick={closeModal}
          ref={modalRef}
        >
          <div className={styles.modal__wrapper} showModal={showModal}>
            <div>
              <Button
                onClick={() => setShowModal((prev) => !prev)}
                variant="contained"
                endIcon={<CloseIcon />}
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  backgroundColor: "#db2b39",
                }}
              >
                Close
              </Button>
              <h1 className={styles.title}>
                Create User<span className={styles.span}>Account</span>
              </h1>
              <div className={styles.form}>
                <TextField
                  id="filled-email-input"
                  label="Email"
                  type="email"
                  autoComplete="off"
                  variant="filled"
                  value={userInfo.email}
                  onChange={onInputChange}
                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="off"
                  variant="filled"
                  value={userInfo.password}
                  onChange={onInputChange}
                />
                <Button variant="contained" onClick={createUser}>
                  Create User
                </Button>

                {/* <button className="button">Login</button> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
