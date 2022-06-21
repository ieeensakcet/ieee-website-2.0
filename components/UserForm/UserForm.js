import { Button, MenuItem, TextField, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./UserForm.module.css";
import { getApp } from "firebase/app";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";
import { firebaseFunctions } from "../../config/firebaseConfig";
import { addUser, updateUserdb } from "../../helpers/userDB";

function CreateUserForm(props) {
  const formData = props?.props;
  const isAddMode = !formData;
  const functions = getFunctions(getApp());
  // const functions = firebaseFunctions;
  connectFunctionsEmulator(functions, "localhost", 5001);
  const registers = httpsCallable(functions, "register");
  const updates = httpsCallable(functions, "updateUser");
  const makeWebmaster = httpsCallable(functions, "makeWebmaster");
  const makeAdmin = httpsCallable(functions, "makeAdmin");
  const defaultValues = {
    email: "",
    password: "",
    displayName: "",
    membershipNumber: "",
    role: "member",
  };

  const [role, setRole] = useState("member");

  const { formState, control, register, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  useEffect(() => {
    if (props?.props) {
      reset(props.props[0]);
      setRole(props.props[0].customClaims);
    }
  }, [reset, props, formData]);

  const roleChange = (e) => {
    setRole(e.target.value);
  };

  const [data, setData] = useState(null);

  const createUser = async (data) => {
    await registers({
      email: data.email,
      password: data.password,
      displayName: data.fullname,
      role: data.role,
      membershipNumber: data.membershipNumber,
    })
      .then((responce) => {
        addUser({
          email: data.email,
          displayName: data.fullname,
          role: data.role,
          membershipNumber: data.membershipNumber,
        });
        alert(responce.data.message)
      })
      .catch((error) => {
        // Getting the Error details.
        const code = error.code;
        const message = error.message;
        const details = error.details;
        // ...
      });
  };
  const updateUser = async (data) => {
    console.log("Update User", data);
    await updates({
      id: data.id,
      email: data.email,
      password: data.password,
      displayName: data.fullname,
      role: data.role,
      membershipNumber: data.membershipNumber,
    })
      .then(async (responce) => {
        updateUserdb(data.id, {
          email: data.email,
          displayName: data.displayName,
          customClaims: data.role,
          membershipNumber: data.membershipNumber,
        });
        if (data.role === "webmaster") {
          await makeWebmaster({ id: data.id });
        }
        if (data.role === "admin") {
          await makeAdmin({ id: data.id });
        }
        alert(responce.data.message)
      })
      .catch((error) => {
        // Getting the Error details.
        const code = error.code;
        const message = error.message;
        const details = error.details;
        // ...
      });
  };
  const onSubmit = async (data) => {
    setData(data);
    return isAddMode ? await createUser(data) : await updateUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
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
                  sx={{ width: "100%" }}
                  {...field}
                  variant="filled"
                  label="Full Name"
                  inputProps={register("displayName", {
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
                  sx={{ width: "100%" }}
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
                  sx={{ width: "100%" }}
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
              disabled={isAddMode ? true : false}
              variant="filled"
              defaultValue="member"
              onChange={roleChange}
              value={role ?? ""}
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
          {isAddMode ? "Create User" : "Update User"}
        </Button>
      </div>
    </form>
  );
}

export default CreateUserForm;
