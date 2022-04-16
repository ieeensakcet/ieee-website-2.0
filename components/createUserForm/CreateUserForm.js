import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./CreateUserForm.module.css";

function CreateUserForm() {
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

  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <div className={styles.form}>
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
            <TextField {...field} variant="filled" label="Email" type="email" inputProps={register("email", {
                required: "Please enter user email",
              })}
              error={errors.email}
              helperText={errors.email?.message}/>
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField {...field} variant="filled" label="Full Name" inputProps={register("fullname", {
                required: "Please enter user name",
              })}
              error={errors.fullname}
              helperText={errors.fullname?.message}/>
          )}
          name="fullname"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
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
        <Controller
          render={({ field }) => (
            <TextField
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
