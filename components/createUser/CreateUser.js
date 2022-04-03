import { useState } from "react";
import useProvideAuth from "../../utils/auth";

//styles
import styles from "./CreateUser.module.css";
import { Button, TextField } from "@mui/material";

export default function CreateUser() {
  // const dispatch = useDispatch()
  const auth = useProvideAuth()

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const creates = (e) => {
    e.preventDefault();
    if(!userInfo.email || !userInfo.password){
      alert("enter email and password")
      return;
    }
    auth.signup(userInfo.email, userInfo.password)
  };

  const onInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <div>
      <h1 className={styles.title}>Create User<span className={styles.span}>Account</span></h1>
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
          <Button variant="contained" onClick={creates}>Create User</Button>

          {/* <button className="button">Login</button> */}
      </div>
    </div>
  );
}
