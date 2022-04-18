import { Button, MenuItem, TextField, Grid } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./CreateUserForm.module.css";
import { getApp } from "firebase/app";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";
import { firebaseFunctions } from "../../config/firebaseConfig";

function CreateUserForm() {
  const functions = getFunctions(getApp());
  // const functions = firebaseFunctions;
  connectFunctionsEmulator(functions, "localhost", 5001);
  const registers = httpsCallable(functions, "register");
  const defaultValues = {
    email: "",
    password: "",
    fullname: "",
    membershipNumber: "",
    role: "",
  };
  const { formState, getValues, watch, control, register, handleSubmit } =
    useForm({
      defaultValues,
    });
  const { errors } = formState;

  const [data, setData] = useState(null);
  console.log(data);

  const createUser = (data) => {
    // e.preventDefault();
    console.log("running")
    // if (!userInfo.email || !userInfo.password) {
    //   alert("enter email and password");
    //   return;
    // }
    // auth.signup(userInfo.email, userInfo.password);
    registers({
      email: data.email,
      password: data.password,
      displayName: data.fullname,
      role: data.role,
      membershipNumber: data.membershipNumber,
    })
      .then((result) => {
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
  const onSubmit = (data) => {setData(data); createUser(data)}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* <TextField
                    id="filled-email-input"
                    label="Email"
                    type="email"
                    autoComplete="off"
                    variant="filled"
                    value={userInfo.email}
                    onChange={onInputChange}
                  /> */}
            {/* <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    variant="filled"
                    value={userInfo.password}
                    onChange={onInputChange}
                  /> */}
            <Controller
              render={({ field }) => (
                <TextField
                sx={{width: '100%'}}
                  {...field}
                  variant="filled"
                  label="Email"
                  type="email"
                  inputProps={register("email", {
                    required: "Please enter user email",
                  })}
                  error={errors.email}
                  helperText={errors.email?.message}
                />
              )}
              name="email"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                sx={{width: '100%'}}
                  {...field}
                  variant="filled"
                  label="Full Name"
                  inputProps={register("fullname", {
                    required: "Please enter user name",
                  })}
                  error={errors.fullname}
                  helperText={errors.fullname?.message}
                />
              )}
              name="fullname"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                sx={{width: '100%'}}
                  {...field}
                  variant="filled"
                  label="Password"
                  type="password"
                  inputProps={register("password", {
                    required: "Please enter password",
                  })}
                  error={errors.password}
                  helperText={errors.password?.message}
                />
              )}
              name="password"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                sx={{width: '100%'}}
                  {...field}
                  variant="filled"
                  label="Membership Number"
                  type="number"
                  inputProps={register("membershipNumber", {
                    required: "Please enter member number",
                  })}
                  error={errors.membershipNumber}
                  helperText={errors.membershipNumber?.message}
                />
              )}
              name="membershipNumber"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Role"
              variant="filled"
              defaultValue=""
              inputProps={register("role", {
                required: "Please enter user role",
              })}
              error={errors.role}
              helperText={errors.role?.message}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="webmaster">Webmaster</MenuItem>
              <MenuItem value="member">Member</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Create User
        </Button>
        {/* <Button variant="contained" onClick={createUser} type="submit">
                    Create User
                  </Button> */}
      </div>
    </form>
  );
}

export default CreateUserForm;
