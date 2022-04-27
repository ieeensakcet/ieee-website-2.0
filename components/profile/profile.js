import { Avatar, Link, Typography } from "@mui/material";
// import React from "react";

// import image from "../../images/profiles/person.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import classes from ".//style.module.css";

export default function Profile({
  name,
  designation,
  linkedInURL,
  emailURL,
  image,
}) {
  return (
    <div className={classes.profile}>
      <Avatar alt="Remy Sharp" src={image} className={classes.profile__image} />
      <Typography variant="h6">{name}</Typography>
      <Typography variant="button">{designation}</Typography>
      <div className={classes.profile__socialIcons}>
        {linkedInURL ? (
          <Link
            href={linkedInURL}
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        ) : (
          ""
        )}
        {emailURL ? (
          <Link href={emailURL} target="_blank" rel="noopener" color="inherit">
            <EmailIcon fontSize="large" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
