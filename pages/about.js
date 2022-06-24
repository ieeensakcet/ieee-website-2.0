import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import styles from "../styles/About.module.css";
import IEEEtimeline from "../components/timeline/IEEEtimeline";
import {
  Accordion,
  Link,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";

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
            <div className={styles.About_collegeimg}>
              <Image
                src="https://ik.imagekit.io/ieeensakcet/About/tr:w-1000/College_adminblock_MN682k9FP.png"
                layout="fill"
                alt="college"
              />
            </div>

            <div className={styles.About_about_text}>
              <Typography variant="h6" sx={{ textAlign: "justify" }}>
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
              padding: "20px",
              gap: "20px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#c21531",
                borderBottom: "2px solid #000",
                display: "inline",
              }}
            >
              {t("about:head_our_community")}
            </Typography>

            <div className={styles.About_about_community1}>
              <div className={styles.About_about_community_img}>
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg"
                  layout="fill"
                  alt="pyramid"
                  loading="lazy"
                  className={styles.About__ourCommunity__pyramid}
                />
              </div>

              <div className={styles.About__ourCommunity__text}>
                <Typography variant="h6" sx={{ textAlign: "justify" }}>
                  IEEE has its community around the globe, with more than
                  420,000 IEEE members. The world map has been divided into 10
                  regions and we come under Region 10 (Asia and Pacific), we are
                  located in India and belong to the IEEE India Council which
                  acts as a consortium of 12 IEEE Sections located in different
                  states of the country. IEEE Hyderabad Section foresees the
                  activities in Telangana and Andhra Pradesh, different IEEE
                  organizational units come under the section which includes
                  IEEE Student Branches of colleges and universities.
                </Typography>
              </div>
            </div>
          </Paper>
          <Paper
            elevation={12}
            sx={{
              backgroundColor: "#ffffff",

              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ color: "#000", paddingTop: "20px" }}>
              {t("about:head_what")}
            </Typography>
            <IEEEtimeline />
          </Paper>
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
                src="https://ik.imagekit.io/ieeensakcet/About/tr:w-1000/Workflow_Cr44BHyBc.png"
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
                    Comprises of Counselor, society advisors, chairs,
                    vice-chairs, team leads, event coordinators and the
                    leadership team members. It is responsible for looking after
                    the workflow and maintaining integrity and sustainbility.
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
                  <Typography variant="h6">Leadership Team</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    It acts as the HR of an organization and oversees the
                    complete function of the Student Branch.
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
                  <Typography variant="h6">Publicity Team</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    This team is responsible for managing social media,
                    promotions of events and providing support to the exisiting
                    societies. It is internally divided into 2 teams: <br />
                    1. Content Team - Responsible for generating content and
                    deciding what goes up on our social media accounts and
                    posters. <br />
                    2. Design Team - Responsible for desiging the posters,
                    flyers and social media posts. <br />
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
        <Link href="/ur/about" locale="ur">
          <h2>Urdu</h2>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
