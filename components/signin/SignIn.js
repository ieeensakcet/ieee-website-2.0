import { useState } from "react";
import useProvideAuth from "../../utils/auth";

//styles
import styles from "./SignIn.module.css";
import { Button, TextField } from "@mui/material";

export default function Login() {
  // const dispatch = useDispatch()
  const auth = useProvideAuth()

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const logins = (e) => {
    e.preventDefault();
    if(!userInfo.email || !userInfo.password){
      alert("enter email and password")
      return;
    }
    auth.signin(userInfo.email, userInfo.password)
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
      <h1 className={styles.title}>Login to your <span className={styles.span}>Account</span></h1>
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
          <Button variant="contained" onClick={logins}>Login</Button>

          {/* <button className="button">Login</button> */}
      </div>
    </div>
  );
}
