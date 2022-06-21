import { useState } from "react";
import useProvideAuth from "../../utils/auth";

//styles
import styles from "./SignIn.module.css";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const TextInput = () => {
  const auth = useProvideAuth();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
  };
  const logins = (e) => {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password) {
      alert("enter email and password");
      return;
    }
    auth.signin(userInfo.email, userInfo.password);
  };

  const resetPass = () => {
    if(!userInfo.email){
      alert("enter email address")
      return
    }
    auth.ResetPassword(userInfo.email)
  }
  return (
    <>
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
      <Button sx={{justifyContent: "start"}} variant="text" onClick={resetPass}>Forgot Password?</Button>
      <Button variant="contained" onClick={logins}>
        Login
      </Button>
    </>
  );
};

export default function Login() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1 className={styles.title}>
        Login to your <span className={styles.span}>Account</span>
      </h1>
      <h5 className={styles.subTitle}>
        Not a Member Yet? <a className={styles.span}>Join Us</a>
      </h5>
      <div className={styles.form}>
        <TextInput />
      </div>
    </div>
  );
}
