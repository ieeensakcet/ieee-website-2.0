import {
  Avatar,
  Button,
  Link as MLink,
  Paper,
  Typography,
} from "@mui/material";
import classes from "../styles/WIE.module.css";
import Link from "next/Link";
import Image from "next/image";

import Profile from "../components/profile/profile.js";

import { wie } from "./data/profile";

export default function Wie() {
  return (
    <div className={classes.wie}>
      <section className={classes.wie__groupPhoto}>
        <div className={classes.wie__groupPhoto__container}>
          <Image
            src="https://ik.imagekit.io/ieeensakcet/tr:w-1700/WIE_copy_gtxHcaImz.JPG"
            alt="grpPhoto"
            layout="fill"
            loading="lazy"
            className={classes.wie__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <Image
                src="/wie/ieee-wie-logo.png"
                alt="wieLogo"
                layout="fixed"
                loading="lazy"
                height="100px"
                width="150px"
                className={classes.logo__image}
              />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                IEEE Women in Engineering (WIE) is a global network of IEEE
                members and volunteers dedicated to promoting women engineers
                and scientists, and inspiring girls around the world to follow
                their academic interests in a career in engineering and science.
              </Typography>
              <MLink
                href="https://wie.ieee.org/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    backgroundColor: "#712e87",
                    marginTop: "20px",
                  }}
                >
                  Learn More
                </Button>
              </MLink>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.wie__joinus}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
          }}
        >
          On a mission to encourage women engineers to lead and prosper in
          technical fields and nurture their diverse talents through
          distinguished events and activities
        </Typography>
        <Link
          href="/joinus"
          sx={{
            link: {
              textDecoration: "none",
            },
          }}
        >
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
      <section className={classes.wie__benefits}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            borderBottom: "3px solid #fff",
          }}
        >
          WIE MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.wie__benefits__cards}>
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
              src="/wie/email.png"
              alt="email"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="300px"
            />
            <Typography variant="body1">
              FEATURES OPPORTUNITIES TO NETWORK, VOLUNTEER, PARTICIPATE IN LOCAL
              AND GLOBAL WIE ACTIVITIES
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
              src="/wie/medal.png"
              alt="medal"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="300px"
            />
            <Typography variant="body1">
              EEE PROGRAM RECOGNISES WIE MEMBERS AND GROUPS WHO HAVE MADE AN
              OUTSTANDING CONTRIBUTION
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
              src="/wie/tag.png"
              alt="tag"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="300px"
            />
            <Typography variant="body1">
              DISCOUNTED REGISTRATIONS TO THE ANNUAL IEEE-WIE INTERNATIONAL
              LEADERSHIP CONFERENCES AND OTHER EVENTS.
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
              src="/wie/around.png"
              alt="around"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="300px"
            />
            <Typography variant="body1">
              IEEE PROVIDES GRANTS FOR IEEE-WIE MEMBERS TO ATTEND AND PRESENT AT
              SPONSORED CONFERENCES AND EVENTS
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
              src="/wie/help.png"
              alt="help"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="300px"
            />
            <Typography variant="body1">
              GET INVOLVED LOCALLY WITH AN IEEE-WIE AFFINITY GROUP DISCOVER AND
              CONNECT WITH YOUR PEERS Volunteer
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
              src="/wie/scholarship.png"
              alt="scholarship"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="300px"
            />
            <Typography variant="body1">
              IEEE IS PLEASED TO OFFER PRE-UNIVERSITY, UNDERGRADUATE AND
              GRADUATE STUDENTS SCHOLARSHIPS.
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.wie__website}>
        <Typography variant="h5">
          To visit IEEE Hyderabad section WIE Chapter website
        </Typography>
        <MLink
          sx={{
            textDecoration: "none",
          }}
          href="https://ieeehyderabad.org/chapters-ag/women-in-engineering-wie"
          target="_blank"
          rel="noopener"
        >
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
            Click Here
          </Button>
        </MLink>
      </section>
      <section className={classes.wie__team}>
        <Typography
          variant="h4"
          sx={{
            color: "#712e87",
            borderBottom: "3px solid #712e87",
          }}
        >
          Meet The Team
        </Typography>
        <div className={classes.wie__team__members}>
          {wie.map((person) => (
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
      <section className={classes.wie__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.wie__message__content}>
          <div className={classes.wie__message__content__person}>
            <Profile
              key="Ms. Firdous Rehana"
              name="Ms. Firdous Rehana"
              designation="Faculty Advisor"
              emailURL="https://www.linkedin.com/in/firdous-rehana-55ba3a23/"
              linkedInURL="https://www.linkedin.com/in/firdous-rehana-55ba3a23/"
              image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/rehana_mam.png"
            />
          </div>
          <Typography variant="h6">
            In the context of Engineering, women play an essential role. When
            women are empowered with access to equal rights and opportunities,
            it results in the improvement of prospects for present and future
            generations. I believe that IEEE WIE is a community that greatly
            understands and promotes women's empowerment in the fields of STEM
            and all women should be part of it.
          </Typography>
        </div>
      </section>
    </div>
  );
}
