import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer/Footer";
// import NavBar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";

import { Button, Container, Paper, Typography } from "@mui/material";

export default function Home() {
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

      {/* <NavBar /> */}
      <main className={styles.main}>
        <div className={styles.home}>
          <Container
            maxWidth={false}
            className={styles.container}
            disableGutters={true}
          >
            <Image
              src="https://ik.imagekit.io/ieeensakcet/Home/tr:w-1800/IEEEGroup23crop_Fnm_9gRxW.png"
              alt="ieee_sb"
              layout="fill"
              objectFit="contain"
              // className={styles.container__image}
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
              <Paper elevation={8} className={styles.paper}>
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
                    // className={styles.image}
                  />
                </div>
              </Paper>
              <Paper elevation={8} className={styles.paper}>
                <div>
                  <Image
                    src="/assets/telescope.webp"
                    alt="telescope_image"
                    title="vision"
                    height={150}
                    width={150}
                    // className={styles.image}
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
            {/* <section className={styles.events__section}>
          <Typography variant="h4" className={styles.events__header}>
            EVENTS
          </Typography>
          <div className={styles.events}>
            <Paper elevation={12} className={styles.events_cards}>
              <div className={styles.events_cards_image}>
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/webinar1_5vNp-eFY2.jpg"
                  alt="webinar_image"
                  loading="lazy"
                  title="webinar"
                  className={styles.Image}
                />
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/webinar2_fJIQSopo9f.jpg"
                  alt="webinar_image"
                  loading="lazy"
                  title="webinar"
                  className={styles.Image}
                />
              </div>
              <header className={styles.events_cards_header}>
                <Typography variant="h5" className={styles.font}>
                  Webinars
                </Typography>
                <Typography variant="body2" className={styles.font_viewAll}>
                  <Link to="/webinars" className={styles.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
            <Paper elevation={12} className={styles.events_cards}>
              <div className={styles.events_cards_image}>
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/contest_qE08g9fZe.jpeg"
                  alt="competition_image"
                  loading="lazy"
                  title="competition"
                  className={styles.Image}
                />
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/competition_YJJ38JHNLt.webp"
                  alt="competition_image"
                  loading="lazy"
                  title="competition"
                  className={styles.Image}
                />
              </div>
              <header className={styles.events_cards_header}>
                <Typography variant="h5" className={styles.font}>
                  Competitions
                </Typography>
                <Typography variant="body2" className={styles.font_viewAll}>
                  <Link to="/competitions" className={styles.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
            <Paper
              elevation={12}
              className={`${styles.events_cards} ${styles.quizzes}`}
            >
              <div className={styles.events_cards_image}>
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/quiz2_JTrlpOgug.jpg"
                  alt="quiz_image"
                  loading="lazy"
                  title="quiz"
                  className={styles.Image}
                />
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/quiz1_s8sl-97c-i.jpg"
                  alt="quiz_image"
                  loading="lazy"
                  title="quiz"
                  className={styles.Image}
                />
              </div>
              <header className={styles.events_cards_header}>
                <Typography variant="h5" className={styles.font}>
                  Quizzes
                </Typography>
                <Typography variant="body2" className={styles.font_viewAll}>
                  <Link to="/quizzes" className={styles.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
            <Paper
              elevation={12}
              className={`${styles.events_cards} ${styles.quizzes}`}
            >
              <div className={styles.events_cards_image}>
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/workshop1_rNGAqLYNa.webp"
                  alt="workshop_image"
                  loading="lazy"
                  title="workshop"
                  className={styles.Image}
                />
                <Image
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/workshop2_2bm7BAior.webp"
                  alt="workshop_image"
                  loading="lazy"
                  title="workshop"
                  className={styles.Image}
                />
              </div>
              <header className={styles.events_cards_header}>
                <Typography variant="h5" className={styles.font}>
                  Workshops
                </Typography>
                <Typography variant="body2" className={styles.font_viewAll}>
                  <Link to="/workshops" className={styles.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
          </div>
        </section> */}
            {/* <section className={styles.ourChapters}>
          <Typography variant="h4" className={styles.ourChapters__header}>
            OUR CHAPTERS
          </Typography>
          <div className={styles.chapter_cards}>
            <Paper elevation={12} className={styles.chapters}>
              <Image
                src="https://ik.imagekit.io/ieeensakcet/tr:h-70/ieee_bDdem9m3j.png"
                loading="lazy"
                alt="chapter_image"
                className={styles.chapter_logo}
              />
            </Paper>
            <Paper elevation={12} className={styles.chapters}>
              <Image
                src="https://ik.imagekit.io/ieeensakcet/tr:h-70/ieee_bDdem9m3j.png"
                loading="lazy"
                alt="chapter_image"
                className={styles.chapter_logo}
              />
            </Paper>
            <Paper elevation={12} className={styles.chapters}>
              <Image
                src="https://ik.imagekit.io/ieeensakcet/tr:h-70/ieee_bDdem9m3j.png"
                loading="lazy"
                alt="chapter_image"
                className={styles.chapter_logo}
              />
            </Paper>
          </div>
        </section> */}
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

      <Footer />
      <footer className={styles.footer}></footer>
    </div>
  );
}
