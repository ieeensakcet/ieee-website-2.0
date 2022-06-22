import { Button, MenuItem, TextField, Grid, Checkbox } from "@mui/material";
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
    society: "",
    imageURL: "",
    linkedinURL: "",
    societyRole: "",
    excom: false,
  };

  const [role, setRole] = useState("member");

  const { formState, control, register, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  useEffect(() => {
    if (props?.props) {
      reset(props.props[0]);
      setRole(props.props[0]?.customClaims);
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
      displayName: data.displayName,
      role: data.role,
      membershipNumber: data.membershipNumber,
      photoURL: data.imageURL,
    })
      .then((responce) => {
        addUser({
          email: data.email,
          displayName: data.displayName,
          role: data.role,
          membershipNumber: data.membershipNumber,
          imageURL: data.imageURL,
          linkedinURL: data.linkedinURL,
          society: data.society,
          societyRole: data.societyRole,
          excom: data.excom,
        });
        alert(responce.data.message);
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
      photoURL: data.imageURL,
    })
      .then(async (responce) => {
        updateUserdb(data.id, {
          email: data.email,
          displayName: data.displayName,
          customClaims: data.role,
          membershipNumber: data.membershipNumber,
          imageURL: data.imageURL,
          linkedinURL: data.linkedinURL,
          society: data.society,
          societyRole: data.societyRole,
          excom: data.excom,
        });
        if (data.role === "webmaster") {
          await makeWebmaster({ id: data.id });
        }
        if (data.role === "admin") {
          await makeAdmin({ id: data.id });
        }
        alert(responce.data.message);
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
                  error={errors.displayName}
                  helperText={errors.displayName?.message}
                />
              )}
              name="displayName"
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
            <Controller
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  variant="filled"
                  label="Society"
                  inputProps={register("society", {
                    required: "Please enter Society",
                  })}
                  error={errors.society}
                  helperText={errors.society?.message}
                />
              )}
              name="society"
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
                  label="Image URL"
                  inputProps={register("imageURL", {
                    required: "Please enter image URL",
                  })}
                  error={errors.imageURL}
                  helperText={errors.imageURL?.message}
                />
              )}
              name="imageURL"
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
                  label="Linkedin URL"
                  inputProps={register("linkedinURL", {
                    required: "Please enter linkedin URL",
                  })}
                  error={errors.linkedinURL}
                  helperText={errors.linkedinURL?.message}
                />
              )}
              name="linkedinURL"
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
                  label="Society Role"
                  inputProps={register("societyRole", {
                    required: "Please enter society role",
                  })}
                  error={errors.societyRole}
                  helperText={errors.societyRole?.message}
                />
              )}
              name="societyRole"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <label>Member of ExCom?</label>
            <Controller
              name="excom"
              control={control}
              render={({ field }) => (
                <Checkbox
                  onChange={(e) => field.onChange(e.target.checked)}
                  checked={field.value}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              )}
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
