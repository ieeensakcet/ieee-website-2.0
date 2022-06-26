import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import "react-chatbot-kit/build/main.css";
import Logo from "../components/logo/Logo"

import groupPhoto from "../public/assets/IEEEGroup.webp";
import csLogo from "../public/assets/ieee-cs-logo.png";
import rasLogo from "../public/assets/ieee-ras-logo.png";
import wieLogo from "../public/assets/ieee-wie-logo.png";
import casLogo from "../public/assets/ieee-cas-logo.png";
import spsLogo from "../public/assets/ieee-sps-logo.png";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import EventCard from "../components/eventCard/EventCard";

export default function Home() {
  const [events, setevents] = useState([]);
  const [showBot, toggleBot] = useState(false);

  useEffect(() => {
    const eventsCollectionRef = query(
      collection(db, "events"),
      where("scheduleType", "==", "completed"),
      orderBy("date", "desc"),
      limit(6)
    );
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setevents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    // return () => {
      getEvents();
    // };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET</title>
        <meta
          name="description"
          content="IEEE Student Branch of Nawab Shah Alam Khan College of Engineering &#38; Technology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <>
      {showBot && (
        <div className={styles.app_chatbot_container}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button
        className={styles.app_chatbot_button}
        onClick={() => toggleBot((prev) => !prev)}
      >
        <div>Nawab</div>
        <Logo/>
      </button>
    </>
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
                  <Typography variant="h4">Mission</Typography>
                  <Typography variant="subtitle1">
                    To promote students empowerment, develop professional skills
                    , organise diverse events and work towards IEEE&#39;s
                    mission.
                  </Typography>
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
                  <Typography variant="h4">Vision</Typography>
                  <Typography variant="subtitle1">
                    We envision offering a relevant platform to learn and seek
                    industrial experience, personal development, social welfare
                    and help explore various engineering fields.
                  </Typography>
                </header>
              </Paper>
            </section>
            <section className={styles.home__events}>
              <Typography variant="h4" className={styles.home__events__header}>
                LATEST EVENTS
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
                      image={event.images[0]}
                    />
                  );
                })}
              </div>
            </section>
            <section className={styles.ourChapters}>
              <Typography variant="h4" className={styles.ourChapters__header}>
                OUR CHAPTERS
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
                  45+
                </Typography>
                <Typography variant="body1">Student Members</Typography>
              </Paper>
              <Paper elevation={12} className={styles.card}>
                <Typography variant="h3" className={styles.red}>
                  40+
                </Typography>
                <Typography variant="body1">Events</Typography>
              </Paper>
              <Paper elevation={12} className={styles.card}>
                <Typography variant="h3" className={styles.red}>
                  5
                </Typography>
                <Typography variant="body1">Professional Members</Typography>
              </Paper>
              <Paper elevation={12} className={styles.card}>
                <Typography variant="h3" className={styles.red}>
                  3
                </Typography>
                <Typography variant="body1">Chapters</Typography>
              </Paper>
            </div>
            <Typography variant="h2" className={styles.text}>
              Ready to get started?
            </Typography>
            <Typography variant="h6" className={styles.text}>
              Become an IEEE Member to join the first student community of Nawab
              Shah Alam Khan college of Engineering and Technology.
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

      <footer className={styles.footer}></footer>
    </div>
  );
}
