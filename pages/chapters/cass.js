import { Button, Link as MLink, Paper, Typography } from "@mui/material";
import classes from "../../styles/CASS.module.css";
import Link from "next/Link";
import Image from "next/image";

import Profile from "../../components/profile/profile.js";

import { ras } from "../data/profile";

import { IoLibrarySharp } from "react-icons/io5";
import { GoCircuitBoard } from "react-icons/Go";
import { GrResources } from "react-icons/Gr";
import { BsNewspaper } from "react-icons/Bs";
import { TbDiscount2 } from "react-icons/Tb";

import { FaDatabase } from "react-icons/Fa";

export default function Cas() {
  return (
    <div className={classes.cass}>
      <section className={classes.cass__groupPhoto}>
        <div className={classes.cass__groupPhoto__container}>
          <Image
            src="https://ik.imagekit.io/ieeensakcet/tr:w-1700/rasGroup_JtDGVXZhx"
            alt="grpPhoto"
            layout="fill"
            loading="lazy"
            className={classes.cass__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <Image
                src="/cass/cas-vector-logo-w-text-horizontal_web.svg"
                alt="rasLogo"
                layout="fixed"
                loading="lazy"
                height="190px"
                width="280px"
                className={classes.logo__image}
              />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                The IEEE Circuits and Systems Society is the leading
                organization that promotes the advancement of the theory,
                analysis, design, tools, and implementation of circuits and
                systems.
              </Typography>
              <MLink
                href="https://ieee-cas.org/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ backgroundColor: "#006341", marginTop: "20px" }}
                >
                  Learn More
                </Button>
              </MLink>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.cass__joinus}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Our motive is to promote the fields of circuit and system as a career
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
              backgroundColor: "#00629B",
              borderRadius: "25px",
            }}
          >
            Join Us
          </Button>
        </Link>
      </section>
      <section className={classes.cass__benefits}>
        <Typography
          variant="h4"
          sx={{ color: "#fff", borderBottom: "3px solid #fff" }}
        >
          CASS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.cass__benefits__cards}>
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
            {/* <Image
              src="/ras/speak.png"
              alt="speak"
              layout="fixed"
              loading="lazy"
              height="125px"
              width="325px"
            /> */}
            <div>
              <IoLibrarySharp size="5em" color=" #000" />
            </div>
            <Typography variant="body1">
              Electronic access to the IEEE Circuits and Systems Society Digital
              Library which features access to all CASS fully owned publication
              issues
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
            {/* <Image
              src="/ras/research.png"
              alt="research"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="260px"
            /> */}
            <div>
              <GoCircuitBoard size="5em" color=" #000" />
            </div>
            <Typography variant="body1">
              Join one of our 14 Technical Committees which promote technical
              activities in various topical areas and offer additional
              opportunities
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
            {/* <Image
              src="/ras/discount.png"
              alt="discount"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="205px"
            /> */}
            <div>
              <GrResources size="5em" color=" #000" />
            </div>
            <Typography variant="body1">
              A myriad of networking resources are available from ISCAS and
              other conferences to regional chapter events
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
            {/* <Image
              src="/ras/award.png"
              alt="award"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="250px"
            /> */}

            <div>
              <BsNewspaper size="5em" color=" #000" />
            </div>
            <Typography variant="body1">
              Free access to the CAS Society Newsletter to stay current on
              industry and society news
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
            {/* <Image
              src="/ras/resource.png"
              alt="resource"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="200px"
            /> */}
            <div>
              <TbDiscount2 size="6em" color=" #000" />
            </div>

            <Typography variant="body1">
              Discount for conference registration fee and free electronic
              access to proceedings of CAS conferences
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
            {/* <Image
              src="/ras/volunteer.png"
              alt="volunteer"
              layout="fixed"
              loading="lazy"
              height="100px"
              width="200px"
            /> */}
            <div>
              <FaDatabase size="5em" color=" #000" />
            </div>
            <Typography variant="body1">
              Get free subscription to IEEE DataPort, which provides access to
              all IEEE DataPort Datasets.
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.cass__team}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            borderBottom: "3px solid #fff",
            marginBottom: "20px",
          }}
        >
          Meet The Team
        </Typography>
        <div className={classes.cass__team__members}>
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
      <section className={classes.cass__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.cass__message__content}>
          <div className={classes.cass__message__content__person}>
            <Profile
              key="Mrs. Rahmath Unnisa"
              name="Mrs. Rahmath Unnisa"
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
            fulfill their targets in less time with greater output. Indeed this
            has been made possible with the innovations in the fields of
            robotics and automation. IEEE RAS is a community that is striving to
            the needs of the hour and is creating a major impact in the fields
            of robotics and automation to cater to the needs of humanity. As an
            advisor to the IEEE RAS chapter in our college, I wish to extend the
            opportunities and benefits to the students and faculty members of
            our institution.
          </Typography>
        </div>
      </section>
    </div>
  );
}
