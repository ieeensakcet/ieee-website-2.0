import { Button, Link as MLink, Paper, Typography } from "@mui/material";
import classes from "../../styles/SPS.module.css";
import Link from "next/Link";
import Image from "next/image";

import Profile from "../../components/profile/profile.js";

import { ras } from "../data/profile";

import DiscountIcon from "@mui/icons-material/Discount";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import DvrIcon from "@mui/icons-material/Dvr";

export default function Sps() {
  return (
    <div className={classes.sps}>
      <section className={classes.sps__groupPhoto}>
        <div className={classes.sps__groupPhoto__container}>
          <Image
            src="https://ik.imagekit.io/ieeensakcet/tr:w-1700/rasGroup_JtDGVXZhx"
            alt="grpPhoto"
            layout="fill"
            loading="lazy"
            className={classes.sps__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <Image
                src="/sps/SPS_Logo_Color_RGB.png"
                alt="rasLogo"
                layout="fixed"
                loading="lazy"
                height="150px"
                width="250px"
                className={classes.logo__image}
              />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                The IEEE's first society, the Signal Processing Society is the
                world’s premier professional society for signal processing
                scientists and professionals since 1948. Signal processing is
                the enabling technology for the generation, transformation, and
                interpretation of information.
              </Typography>
              <MLink
                href="https://signalprocessingsociety.org/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ backgroundColor: "#78BE20", marginTop: "20px" }}
                >
                  Learn More
                </Button>
              </MLink>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.sps__joinus}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          We seek to contribute towards the fields of Signal processing by
          encouraging young minds through workshops, industrial trips and
          projects.
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
      <section className={classes.sps__benefits}>
        <Typography
          variant="h4"
          sx={{ color: "#fff", borderBottom: "3px solid #fff" }}
        >
          SPS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.sps__benefits__cards}>
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
            <DiscountIcon sx={{ fontSize: 80, color: "#00629B" }} />
            <Typography variant="body1">
              Discounts on registration to attend SPS conferences and workshops,
              including ICASSP and ICIP
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
            <LibraryBooksIcon sx={{ fontSize: 80, color: "#00629B" }} />
            <Typography variant="body1">
              Unlimited access to select SPS publications through the Signal
              Processing Digital Library via IEEE Xplore®
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
            <PeopleIcon sx={{ fontSize: 80, color: "#00629B" }} />
            <Typography variant="body1">
              Network with signal processing leaders, share research, and
              exchange ideas at SPS conferences and events
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
            <UploadFileIcon sx={{ fontSize: 80, color: "#00629B" }} />
            <Typography variant="body1">
              Upload to SigPort - an online repository of manuscripts, reports,
              technical white papers, theses, and supporting materials.
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
            <ArtTrackIcon sx={{ fontSize: 120, color: "#00629B" }} />
            <Typography variant="body1">
              Digital delivery of IEEE Signal Processing Magazine and the
              Content Gazette
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
            <DvrIcon sx={{ fontSize: 80, color: "#00629B" }} />
            <Typography variant="body1">
              Get access to educational materials, including conference
              plenaries and tutorials, in the SPS Resource Center
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.sps__team}>
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
        <div className={classes.sps__team__members}>
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
      <section className={classes.sps__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.sps__message__content}>
          <div className={classes.sps__message__content__person}>
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
