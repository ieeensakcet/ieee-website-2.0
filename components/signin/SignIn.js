// import TextField from "@mui/material/TextField";
import { useState } from 'react';
import { auth } from '../../config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {
    // const dispatch = useDispatch()
    
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const logins = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then(userAuth => {
            // dispatch(login({
            //     email: userAuth.user.email,
            //     uid: userAuth.user.uid,
            // }))
            // history.replace("/");
            alert("Successfully Logged In");
        })
        .catch((error) => alert(error.message))

      };
    
    

    const onInputChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };
  return (
    <div>
      <h1>Login to your Account</h1>
      <h5>
        Not a Member Yet? <a>Become member</a>
      </h5>
      <div>
            <form onSubmit={logins} className='form'>
                  <div className="form-group">
                  <label htmlFor="email">Email</label>
                    <input
                      className="inputs"
                      name="email"
                      placeholder="Enter Your E-mail"
                      value={userInfo.email}
                      onChange={onInputChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                  <label htmlFor="password">Password:</label>
                    <input
                      className="inputs"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={userInfo.password}
                      onChange={onInputChange}
                    />
                  </div>
                  <button className="button">
                    Login
                  </button>
                </form>
        </div>
      {/* <TextField
        id="filled-password-input"
        label="Email"
        type="email"
        autoComplete="off"
        variant="filled"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="off"
        variant="filled"
      /> */}
    </div>
  );
}
