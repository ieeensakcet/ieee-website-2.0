import { useState } from "react";
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

//styles
import styles from "./SignIn.module.css";
import { Button, TextField } from "@mui/material";
import useProvideAuth from "../../utils/auth";

export default function CreateUser() {
  // const dispatch = useDispatch()
  const auth = useProvideAuth()

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const createUser = (e) => {
    e.preventDefault();
    if(!userInfo.email || !userInfo.password){
      alert("enter email and password")
      return;
    }
    auth.signup(userInfo.email, userInfo.password)
    // signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    //   .then((userAuth) => {
    //     // dispatch(login({
    //     //     email: userAuth.user.email,
    //     //     uid: userAuth.user.uid,
    //     // }))
    //     // history.replace("/");
    //     alert("Successfully Logged In");
    //   })
    //   .catch((error) => alert(error.message));
  };

  const onInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
  };
  return (
    <div>
      <h1 className={styles.title}>Create User<span className={styles.span}>Account</span></h1>
      <h5 className={styles.subTitle}>
        Not a Member Yet? <a className={styles.span}>Join Us</a>
      </h5>
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
          <Button variant="contained" onClick={createUser()}>Create User</Button>

          {/* <button className="button">Login</button> */}
      </div>
    </div>
  );
}
