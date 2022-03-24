import { Container, Link as MLink, Typography } from "@mui/material";
import React from "react";
// import useStyles from "./style";
import Link from 'next/link';
import styles from './Footer.module.css';
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  // const classes = useStyles();

  return (
    <div>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          width: "100%",
          padding: {sm: "50px 200px", xs: "50px"},
          backgroundColor: "#12679b",
          height: "auto",
          // position: "fixed",
          // left: "0",
          // bottom: "0",
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <div className={styles.mainContainer}>
          <div className={styles.contactus}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              CONTACT US :
            </Typography>
            <div
              className={styles.contactUs__item}
            >
              <LocationOnIcon />
              <Typography variant="body2">
                16-4-1, New Malakpet, Near Railway Station, Hyderabad,
                Telangana, India, 500024
              </Typography>
            </div>
            <div
              className={styles.contactUs__item}
            >
              <CallIcon />
              <Typography variant="body2">+91 8500752481</Typography>
            </div>
            <div
              className={styles.contactUs__item}
            >
              <MailIcon />
              <Typography variant="body2">ieeensakcet@gmail.com</Typography>
            </div>
          </div>
          <div
            className={styles.reachUs}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              REACH US AT :
            </Typography>
            <div className={styles.icons}
            >
              <MLink
                href="https://twitter.com/ieeensakcet"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <FacebookIcon />
              </MLink>
              <MLink
                href="https://twitter.com/ieeensakcet"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <TwitterIcon />
              </MLink>
              <MLink
                href="https://www.instagram.com/ieeensakcet/?igshid=1rorsll9o8e06"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <InstagramIcon />
              </MLink>
              <MLink
                href="https://www.linkedin.com/company/42773344/admin/"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <LinkedInIcon />
              </MLink>
            </div>
          </div>
          <div className={styles.copyright}> 
            <Typography variant="body2">
              Copyright ieeensakcet @2021 All rights reserved
            </Typography>
            <Typography variant="body2">
              <MLink
                href="https://www.ieee.org/security-privacy.html"
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="none"
              >
                Privacy policy
              </MLink>
            </Typography>
            <Typography variant="body2">
              <Link href='/login' className={styles.text}>
                Member login
              </Link>
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
