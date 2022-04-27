import {
  Avatar,
  Button,
  Link as MLink,
  Paper,
  Typography,
} from "@mui/material";
import classes from "../styles/CS.module.css";
import Image from "next/image";
// import { Link as RouterLink } from "react-router-dom"; //Confirm with salman
import Link from "next/Link";

// import mags from "cs/mags.webp";
// import library from "cs/library.webp";
// import price from "cs/price.webp";
// import contacts from "cs/contacts.webp";
// import community from "cs/community.webp";
// import csLogo from "../../../images/homePage/IEEE-CS_Logo.png";

import Profile from "../components/profile/profile.js";

import { cs } from "./data/profile";

export default function Cs() {
  return (
    <div className={classes.cs}>
      <section className={classes.cs__groupPhoto}>
        <div className={classes.cs__groupPhoto__container}>
          <Image
            src="https://ik.imagekit.io/ieeensakcet/tr:w-1700/csGroup"
            alt="grpPhoto"
            layout="fill"
            loading="lazy"
            className={classes.cs__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <Image
                src="/cs/IEEE-CS_Logo.png"
                alt="csLogo"
                layout="fixed"
                loading="lazy"
                height="100px"
                width="320px"
                className={classes.logo__image}
              />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                IEEE Computer Society is a professional society of IEEE. Its
                purpose and scope is “to advance the theory, practice, and
                application of computer and information processing science and
                technology” and the “professional standing of its members.”
              </Typography>
              <MLink
                href="https://www.computer.org/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ backgroundColor: "#faa41a", marginTop: "20px" }}
                >
                  Learn More
                </Button>
              </MLink>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.cs__joinus}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          "Our goal is to encourage involvement, and provide opportunities for
          students to build valuable skills."
        </Typography>
        <Link href="/joinus" sx={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ backgroundColor: "#000", borderRadius: "25px" }}
          >
            Join Us
          </Button>
        </Link>
      </section>
      <section className={classes.cs__benefits}>
        <Typography variant="h4" sx={{ borderBottom: "3px solid #000" }}>
          CS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.cs__benefits__cards}>
          <Paper
            elevation={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "40px",
            }}
          >
            <Image
              src="/cs/mags.webp"
              alt="mags"
              layout="fixed"
              loading="lazy"
              height="80px"
              width="110px"
            />
            <Typography variant="body1">
              Computer Magazine, our flagship publication (12 digital issues)
            </Typography>
          </Paper>
          <Paper
            elevation={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "40px",
            }}
          >
            <Image
              src="/cs/library.webp"
              alt="library"
              layout="fixed"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <Typography variant="body1">
              Computer Society Digital Library
            </Typography>
          </Paper>
          <Paper
            elevation={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "40px",
            }}
          >
            <Image
              src="/cs/price.webp"
              alt="price"
              layout="fixed"
              loading="lazy"
              height="80px"
              width="90px"
            />
            <Typography variant="body1">
              Member pricing on optional magazines and transactions
            </Typography>
          </Paper>
          <Paper
            elevation={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "40px",
            }}
          >
            <Image
              src="/cs/contacts.webp"
              alt="contacts"
              layout="fixed"
              loading="lazy"
              height="80px"
              width="90px"
            />
            <Typography variant="body1">Make professional contacts</Typography>
          </Paper>
          <Paper
            elevation={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "40px",
            }}
          >
            <Image
              src="/cs/community.webp"
              alt="community"
              layout="fixed"
              loading="lazy"
              height="80px"
              width="90px"
            />
            <Typography variant="body1">
              Access more than 40 technical communities.
            </Typography>
          </Paper>
          <Paper
            elevation={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "40px",
            }}
          >
            <Image
              src="/cs/library.webp"
              alt="library"
              layout="fixed"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <Typography variant="body1">
              Online professional programs with certifiaction for all.
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.cs__website}>
        <Typography variant="h5">
          To visit IEEE Hyderabad section CS Chapter website
        </Typography>
        <MLink
          href="https://ieeehyderabad.org/chapters-ag/computer-society"
          target="_blank"
          rel="noopener"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ backgroundColor: "#000", borderRadius: "25px" }}
          >
            Click Here
          </Button>
        </MLink>
      </section>
      <section className={classes.cs__team}>
        <Typography
          variant="h4"
          sx={{ color: "#faa41a", borderBottom: "3px solid #faa41a" }}
        >
          Meet The Team
        </Typography>
        <div className={classes.cs__team__members}>
          {cs.map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              designation={person.designation}
              emailURL={person.emailURL}
              linkedInURL={person.linkedInURL}
              image={person.image}
            />
          ))}
        </div>
      </section>
      <section className={classes.cs__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.cs__message__content}>
          <div className={classes.cs__message__content__person}>
            {/* <Avatar
              sx={{ width: "120px", height: "120px" }}
              src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/asma_mam_tbqioU5dh.png"
            /> */}
            <Profile
              key="Mrs. Asma Mehdia"
              name="Mrs. Asma Mehdia"
              designation="Faculty Advisor"
              emailURL="https://www.linkedin.com/in/asma-mehdia-7565151b4/"
              linkedInURL="https://www.linkedin.com/in/asma-mehdia-7565151b4/"
              image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/asma_mam_tbqioU5dh.png"
            />
            {/* <Typography variant="h6">Ms Asma Mehdia</Typography>  */}
          </div>
          <Typography variant="h6">
            Joining IEEE is due to the fact that,you can have the smartest
            people in the world around you,but without collaboration the
            technology is not going to evolve. As a member of CS, I find the
            membership invaluable source of information and conduit for growth.
            I believe for lasting contribution to a discipline, you really need
            to have an organization like IEEE behind you.
          </Typography>
        </div>
      </section>
    </div>
  );
}
