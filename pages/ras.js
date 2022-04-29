import { Button, Link as MLink, Paper, Typography } from "@mui/material";
import classes from "../styles/RAS.module.css";
import Link from "next/Link";
import Image from "next/image";

import Profile from "../components/profile/profile.js";

import { ras } from "./data/profile";

export default function Ras() {
  return (
    <div className={classes.ras}>
      <section className={classes.ras__groupPhoto}>
        <div className={classes.ras__groupPhoto__container}>
          <Image
            src="https://ik.imagekit.io/ieeensakcet/tr:w-1700/rasGroup_JtDGVXZhx"
            alt="grpPhoto"
            layout="fill"
            loading="lazy"
            className={classes.ras__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <Image
                src="/ras/ieee-ras-logo.png"
                alt="rasLogo"
                layout="fixed"
                loading="lazy"
                height="100px"
                width="250px"
                className={classes.logo__image}
              />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                The IEEE Robotics and Automation Society (IEEE RAS) is a
                professional society of the IEEE that supports the development
                and the exchange of scientific knowledge in the fields of
                robotics and automation, including applied and theoretical
                issues.
              </Typography>
              <MLink
                href="https://www.ieee-ras.org/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ backgroundColor: "#88201f", marginTop: "20px" }}
                >
                  Learn More
                </Button>
              </MLink>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.ras__joinus}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          We strive to promote the fields of robotics and automation as a career
          and bring awareness and growth among the members of our society
          through curated events and activities.
        </Typography>
        <Link href="/joinus" sx={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              // marginTop: "20px",
              backgroundColor: "#000",
              borderRadius: "25px",
            }}
          >
            Join Us
          </Button>
        </Link>
      </section>
      <section className={classes.ras__benefits}>
        <Typography
          variant="h4"
          sx={{ color: "#fff", borderBottom: "3px solid #fff" }}
        >
          RAS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.ras__benefits__cards}>
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
              src="/ras/speak.png"
              alt="speak"
              layout="fixed"
              loading="lazy"
              height="125px"
              width="325px"
            />
            <Typography variant="body1">
              Access to exclusive magazines, transactions and journals
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
              src="/ras/research.png"
              alt="research"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="260px"
            />
            <Typography variant="body1">
              Get involved with 44 technical co​mittees to work on similar goals
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
              src="/ras/discount.png"
              alt="discount"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="205px"
            />
            <Typography variant="body1">
              Get discounts on RAS events and publications
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
              src="/ras/award.png"
              alt="award"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="250px"
            />
            <Typography variant="body1">
              Get recognized for your outstanding work and efforts{" "}
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
              src="/ras/resource.png"
              alt="resource"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="200px"
            />
            <Typography variant="body1">
              Access to highly valued technical resource
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
              src="/ras/volunteer.png"
              alt="volunteer"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="200px"
            />
            <Typography variant="body1">
              Participate in organising events and activities
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.ras__team}>
        <Typography
          variant="h4"
          sx={{ color: "#88201f", borderBottom: "3px solid #88201f" }}
        >
          Meet The Team
        </Typography>
        <div className={classes.ras__team__members}>
          {ras.map((person) => (
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
      <section className={classes.ras__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.ras__message__content}>
          <div className={classes.ras__message__content__person}>
            <Profile
              key="Ms. Shanila Mahreen"
              name="Ms. Shanila Mahreen"
              designation="Faculty Advisor"
              emailURL="https://www.linkedin.com/in/firdous-rehana-55ba3a23/"
              linkedInURL="https://www.linkedin.com/in/firdous-rehana-55ba3a23/"
              image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/shanila_mam.jpeg"
            />
          </div>
          <Typography
            variant="h6"
            // sx={{}}
          >
            We are in an era where the extent of development relies on machines.
            Today, organizations with the help of robotics and automation can
            fulfil their targets in less time with greater output. Indeed this
            has been made possible with the innovations in the fields of
            robotics and automation. IEEE RAS is a community that is striving to
            the needs of the hour and is creating a major impact in the fields
            of robotics and automation to cater for the needs of humanity. As an
            advisor to the IEEE RAS chapter in our college, I wish to extend the
            opportunities and benefits to the students and faculty members of
            our institution.
          </Typography>
        </div>
      </section>
    </div>
  );
}
