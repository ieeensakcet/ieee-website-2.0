import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import styles from "../styles/About.module.css";
import {
  Accordion,
  Link,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default function About(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET</title>
        <meta name="description" content="IEEE NSAKCET About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.About}>
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              padding: "20px",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                position: "relative",
                minWidth: "50%",
                maxHeight: "100%",
                height: "300px",
              }}
            >
              <Image
                src="https://ik.imagekit.io/ieeensakcet/tr:w-400/college_BKdkFH2fF.webp"
                layout="fill"
                alt="college"
              />
            </div>

            <div className={styles.About_about_text}>
              <Typography variant="h6">
                <span className={styles.About_abouttext_header}>
                  {t("about:about_IEEESB1")}
                </span>{" "}
                {t("about:about_IEEESB")}
              </Typography>
              <h2>{props.locale}</h2>
            </div>
          </Paper>
          <Paper
            elevation={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#c21531", borderBottom: "2px solid #000" }}
            >
              {t("about:head_our_community")}
            </Typography>
            <div
              style={{
                position: "relative",
                minWidth: "80%",
                maxHeight: "100%",
                height: "300px",
              }}
            >
              <Image
                src="https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg"
                layout="fill"
                alt="pyramid"
                loading="lazy"
                className={styles.About__ourCommunity__pyramid}
              />
            </div>
            <div className={styles.About__ourCommunity__text}>
              <Typography variant="h6">{t("about:our_community")}</Typography>
            </div>
          </Paper>
          <section className={styles.About__WhatWeDo}>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              {t("about:head_what")}
            </Typography>
            <Timeline align="left" sx={{ width: "100%", alignItems: "center" }}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "250px",
                      padding: "10px",
                    }}
                  >
                    <Image
                      src="/seminar.png"
                      layout="fixed"
                      alt="seminars"
                      height="50px"
                      width="50px"
                    />
                    <Typography>Seminars</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "250px",
                      padding: "10px",
                    }}
                  >
                    <Image
                      src="/webinar.png"
                      layout="fixed"
                      alt="webinars"
                      loading="lazy"
                      height="50px"
                      width="50px"
                    />
                    <Typography>Webinars</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "250px",
                      padding: "10px",
                    }}
                  >
                    <Image
                      src="/workshop.png"
                      layout="fixed"
                      alt="workshops"
                      loading="lazy"
                      height="50px"
                      width="50px"
                    />
                    <Typography>Workshops</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "250px",
                      padding: "10px",
                    }}
                  >
                    <Image
                      src="/competition.png"
                      layout="fixed"
                      alt="competition"
                      loading="lazy"
                      height="50px"
                      width="50px"
                    />
                    <Typography>Competitions</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "250px",
                      padding: "10px",
                    }}
                  >
                    <Image
                      src="/hackathon.png"
                      layout="fixed"
                      alt="hackathon"
                      loading="lazy"
                      height="50px"
                      width="50px"
                    />
                    <Typography>Hackathons</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={8}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "250px",
                      padding: "10px",
                    }}
                  >
                    <Image
                      src="/network.png"
                      layout="fixed"
                      alt="network"
                      loading="lazy"
                      height="50px"
                      width="50px"
                    />
                    <Typography>Help Build Network</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </section>
          <Paper
            elevation={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "25px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#c21531", borderBottom: "2px solid #000" }}
            >
              HOW WE WORK
            </Typography>
            <div className={styles.About__Work__image}>
              <Image
                src="https://ik.imagekit.io/ieeensakcet/tr:w-800/work_RmD9D29gs7.png"
                layout="fill"
                alt="work"
                loading="lazy"
              />
            </div>
            <div>
              <Accordion
                sx={{
                  backgroundColor: "#12679b",
                  color: "#fff",
                  padding: "15px",
                  margin: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                    Executive Committee (ExCOM)
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Comprises of faculty advisors and core student members who
                    hold officer positions and maintain the workflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "#12679b",
                  color: "#fff",
                  padding: "15px",
                  margin: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Program Committee</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Responsible for planning and execution of activities and
                    events.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "#12679b",
                  color: "#fff",
                  padding: "15px",
                  margin: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Membership Committee</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Responsible for recruiting new members, maintaining their
                    data, funds management and coordinating with existing
                    members.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "#12679b",
                  color: "#fff",
                  padding: "15px",
                  margin: "auto",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Social Media Committee</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    This committee consists of 3 teams: <br />
                    1. Content Team - Responsible for generating content and
                    deciding what goes up on our social media accounts and
                    posters. <br />
                    2. Design Team - Responsible for desiging the posters,
                    flyers and social media posts. <br />
                    3. Website Team - Manages Website and keep it updated
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Paper>
        </div>
        <Link href="/about" locale="en">
          <h2>English</h2>
        </Link>
        <Link href="/te/about" locale="te">
          <h2>Telugu</h2>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
