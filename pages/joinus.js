import ListIcon from "@mui/icons-material/List";
import classes from "../styles/Join.module.css";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Link,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function JoinUs() {
  return (
    <div className={classes.JoinUs}>
      <section className={classes.JoinUs__form}>
        <Typography variant="h4">BECOME AN IEEE MEMBER</Typography>
        <Typography
          variant="h5"
          sx={{
            lineHeight: "45px",
            lineBreak: { xs: "35px", md: "auto" },
            width: { md: "50%", xs: "90%" },
          }}
        >
          Join a community of over 420,000 technology and engineering
          professionals united by a common desire to continuously learn,
          interact, collaborate, and innovate
        </Typography>
        <Link
          sx={{ textDecoration: "none" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLScqnICww9HQLJoFFuBDymNhvjFAn-8WL_eAbQuYNeM9MnTVVw/viewform"
          target="_blank"
          rel="noopener"
        >
          <Button
            startIcon={<ListIcon />}
            size="large"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "10px 20px",
              fontWeight: "600",
              color: "#000",
            }}
          >
            Google Form Submission
          </Button>
        </Link>
      </section>
      <section className={classes.JoinUs__benefits}>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/softskills.png"
            layout="fixed"
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/network.png"
            layout="fixed"
            alt="network"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">NETWORK</Typography>
          <Typography variant="body1">
            Make friends and network with an unparalled, global community of
            professionals
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/awards.png"
            layout="fixed"
            alt="awards"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">AWARDS</Typography>
          <Typography variant="body1">
            Submit projects or papers for consideration and have the opportunity
            to win awards and funding while gaining peer recognition for your
            efforts
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/travelgrants.png"
            layout="fixed"
            alt="travel"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">TRAVEL GRANTS</Typography>
          <Typography variant="body1">
            These grants were created to help you focus on your goals of
            advancing your potential in areas not local to you
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/scholarship.png"
            layout="fixed"
            alt="scholarship"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">SCHOLARSHIPS</Typography>
          <Typography variant="body1">
            Funds to help students pay for an undergraduate or post-graduate
            degree
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/ieeeorg.png"
            layout="fixed"
            alt="ieeeorg"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">@IEEE.org</Typography>
          <Typography variant="body1">
            Get a premium Google Suite account for free. A professional email
            address to make you stand out
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/magazine.png"
            layout="fixed"
            alt="magazine"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">MAGAZINES</Typography>
          <Typography variant="body1">
            Collection of premium magazines, journals and access to some latest
            research papers
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <Image
            src="/joinUs/ieeetv.png"
            layout="fixed"
            alt="ieeetv"
            className={classes.JoinUs__benefits__benefit__image}
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h6">IEEE.tv</Typography>
          <Typography variant="body1">
            An exclusive video portal for IEEE members around the globe
          </Typography>
        </div>
      </section>
      <section className={classes.JoinUs__globalBenefits}>
        <div className={classes.JoinUs__globalBenefits__header}>
          <Image
            src="/joinUs/thinking.png"
            layout="fixed"
            alt="thinking"
            loading="lazy"
            height="120px"
            width="120px"
          />
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            STILL NOT SATISFIED?
          </Typography>
        </div>
        <Typography variant="h5">
          Check out the{" "}
          <a
            href="https://www.ieee.org/membership/benefits/index.html"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "#12679b" }}
          >
            IEEE Global Benefits
          </a>{" "}
          Finder to know more...
        </Typography>
      </section>
      <section className={classes.JoinUs__testemonials}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">Testemonials</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/hafsa_EFuQsDexX.jpeg"
                  sx={{ height: "150px", width: "150px" }}
                />
                <Typography variant="subtitle1">Hafsa Taruj</Typography>
                <Typography variant="overline">
                  Design Team Volunteer
                </Typography>
              </div>
              <Typography variant="body1">
                "Our IEEE Student Branch provides networking opportunities among
                various entrepreneurs and students so that the members achieve
                problem-solving and leadership skills, this will help students
                to come up with new ideas and to determine what they are willing
                to achieve. The Student Branch teaches the students about the
                professional environment of the corporate world and also
                provides technical and fun activities to keep the students
                active and engaged throughout their campus life."
              </Typography>
            </div>
          </div>
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">Testemonials</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kaunain.jpg"
                  sx={{ height: "150px", width: "150px" }}
                />
                <Typography variant="subtitle1">
                  Syeda Kaunain Fatima
                </Typography>
                <Typography variant="overline">Ex SB Chair</Typography>
              </div>
              <Typography variant="body1">
                "IEEE has given me the chance to improve my management skills.
                Being exposed to multitudinous scenarios, I learned valuable
                wisdom about effectively managing my time, developing new work
                processes, voicing opinions while being open to feedback and
                above all, networking with a relevant group of professionals.
                IEEE members are uniquely positioned to provide the innovative
                solutions needed in the technical industries going forward. In
                addition to the human networks that can be tapped for advice or
                assistance, there are many web resources with special access
                just for members."
              </Typography>
            </div>
          </div>
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">Testemonials</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kounain.JPG"
                  sx={{ height: "150px", width: "150px" }}
                />
                <Typography variant="subtitle1">
                  Syeda Kounain Fatima
                </Typography>
                <Typography variant="overline">Secretary</Typography>
              </div>
              <Typography variant="body1">
                "Joining IEEE has provided me with professional exposure. It
                also exposed me to various new opportunities and gave me a
                chance to organize technical events, seminars, webinars and to
                network with people all over the world."
              </Typography>
            </div>
          </div>
        </Carousel>
      </section>
      <section className={classes.JoinUs__accordion}>
        <Typography
          sx={{ color: "#000", textAlign: "center", marginBottom: "30px" }}
          variant="h4"
        >
          FAQ
        </Typography>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">What is IEEE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Institute of Electrical and Electronics Engineers, IEEE is the
              world's largest technical professional organization dedicated to
              advancing technology for the benefit of humanity.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Is IEEE only for CS and IT Engineering Students?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, IEEE is available to all branches of engineering.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              What are the payments options for IEEE membership?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Online payment and payment through Bank.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              I am no longer a student, how can I change to an IEEE Professional
              Membership?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once you finish your student membership, you can apply for
              professional membership the same way you did for student
              membership.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              What are the IEEE Membership Benefits?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>See benefits at top of the page</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Do I need to be an IEEE member to get a GoogleApps@IEEE mail
              account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#12679b", color: "#fff", padding: "15px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">Why do students join the IEEE?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              IEEE membership provides you a chance to improve your management
              skills, effectively manage time, develop new work processes, voice
              your opinions and networking with a relevant group of
              professionals.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
}
