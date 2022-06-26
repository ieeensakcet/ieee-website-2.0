import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";
import groupPhoto from "../public/assets/IEEEGroup.webp";
import csLogo from "../public/assets/ieee-cs-logo.png";
import rasLogo from "../public/assets/ieee-ras-logo.png";
import wieLogo from "../public/assets/ieee-wie-logo.png";
import casLogo from "../public/assets/ieee-cas-logo.png";
import spsLogo from "../public/assets/ieee-sps-logo.png";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import EventCard from "../components/eventCard/EventCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

export default function Home() {
  const [events, setevents] = useState([]);
  useEffect(() => {
    const eventsCollectionRef = query(
      collection(db, "events"),
      where("scheduleType", "==", "completed"),
      orderBy("date"),
      limit(6)
    );
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setevents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    return () => {
      getEvents();
    };
  }, []);
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET</title>
        <meta
          name="description"
          content="IEEE Student Branch of Nawab Shah Alam Khan College of Engineering & Technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <div className={styles.home}>
          <Container
            maxWidth={false}
            className={styles.container}
            disableGutters={true}
          >
            <Image
              src={groupPhoto}
              alt="ieee_sb"
              priority
              className={styles.container__image}
            />
            <div className={styles.header}>
              <div className={styles.header__text}>
                <Typography variant="h4">IEEE STUDENT BRANCH</Typography>
                <Typography variant="body1">
                  Nawab Shah Alam Khan College of Engineering and Technology
                </Typography>
              </div>
              <Link href="/joinus" passHref className={styles.link}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={styles.button}
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </Container>
          <section className={styles.mainSection}>
            <section className={styles.mission}>
              <Paper
                elevation={8}
                sx={{
                  padding: "30px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <header className={styles.headers}>
                  <Typography variant="h4"> {t("home:home1")}</Typography>
                  <Typography variant="subtitle1">{t("home:home2")}</Typography>
                </header>
                <div>
                  <Image
                    src="/assets/dart.webp"
                    alt="dart_image"
                    title="mission"
                    height={150}
                    width={150}
                  />
                </div>
              </Paper>
              <Paper
                elevation={8}
                sx={{
                  padding: "30px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/assets/telescope.webp"
                    alt="telescope_image"
                    title="vision"
                    height={150}
                    width={150}
                  />
                </div>
                <header className={styles.headers}>
                  <Typography variant="h4">{t("home:home12")}</Typography>
                  <Typography variant="subtitle1">{t("home:home3")}</Typography>
                </header>
              </Paper>
            </section>
            <section className={styles.home__events}>
              <Typography variant="h4" className={styles.ourChapters__header}>
                {t("home:home4")}
              </Typography>
              <div className={styles.events__container}>
                {events.map((event) => {
                  return (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      title={event.title}
                      venue={event.venue}
                      date={event.date.seconds}
                    />
                  );
                })}
              </div>
            </section>
            <section className={styles.ourChapters}>
              <Typography variant="h4" className={styles.ourChapters__header}>
                {t("home:home5")}
              </Typography>
              <div className={styles.chapter_cards}>
                <Paper elevation={12} className={styles.chapters}>
                  <Image
                    src={csLogo}
                    loading="lazy"
                    alt="chapter_image"
                    className={styles.chapter_logo}
                  />
                </Paper>
                <Paper elevation={12} className={styles.chapters}>
                  <Image
                    src={wieLogo}
                    loading="lazy"
                    alt="chapter_image"
                    className={styles.chapter_logo}
                  />
                </Paper>
                <Paper elevation={12} className={styles.chapters}>
                  <Image
                    src={casLogo}
                    loading="lazy"
                    alt="chapter_image"
                    className={styles.chapter_logo}
                  />
                </Paper>
                <Paper elevation={12} className={styles.chapters}>
                  <Image
                    src={spsLogo}
                    loading="lazy"
                    alt="chapter_image"
                    className={styles.chapter_logo}
                  />
                </Paper>
                <Paper elevation={12} className={styles.chapters}>
                  <Image
                    src={rasLogo}
                    loading="lazy"
                    alt="chapter_image"
                    className={styles.chapter_logo}
                  />
                </Paper>
              </div>
            </section>
          </section>
          <Container
            maxWidth={false}
            className={styles.bottomContainer}
            disableGutters={true}
          >
            <div className={styles.cards}>
              <Paper elevation={12} className={styles.card}>
                <Typography variant="h3" className={styles.red}>
                  70+
                </Typography>
                <Typography variant="body1">{t("home:home6")}</Typography>
              </Paper>
              <Paper elevation={12} className={styles.card}>
                <Typography variant="h3" className={styles.red}>
                  50+
                </Typography>
                <Typography variant="body1">{t("home:home7")}</Typography>
              </Paper>
              <Paper elevation={12} className={styles.card}>
                <Typography variant="h3" className={styles.red}>
                  5
                </Typography>
                <Typography variant="body1">{t("home:home8")}</Typography>
              </Paper>
              <Paper elevation={12} className={styles.card}>
                <Typography variant="h3" className={styles.red}>
                  5
                </Typography>
                <Typography variant="body1">{t("home:home9")}</Typography>
              </Paper>
            </div>
            <Typography variant="h2" className={styles.text}>
              {t("home:home10")}
            </Typography>
            <Typography variant="h6" className={styles.text}>
              {t("home:home11")}
            </Typography>
            <Link href="/joinus" passHref className={styles.link}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.button}
              >
                Join Us
              </Button>
            </Link>
          </Container>
        </div>
      </main>

      <Footer />
      <footer className={styles.footer}></footer>
    </div>
  );
}
