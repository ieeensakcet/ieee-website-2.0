import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer/Footer";
import styles from "../../styles/Events.module.css";
import EventCard from "../../components/eventCard/EventCard";
import { Button } from "@mui/material";

import { db } from "../../config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setevents] = useState([]);
  const [eventType, setEventType] = useState("concert");
  const [eventCat, setEventCat] = useState([]);
  useEffect(() => {
    console.log(eventType);
    const q = query(
      collection(db, "events"),
      where("eventType", "==", eventType)
    );
    const getEventsCategory = async () => {
      const data = await getDocs(q);
      setEventCat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEventsCategory()
  }, [eventType]);
  useEffect(() => {
    const eventsCollectionRef = collection(db, "events");
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef);
      setevents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvents();
  }, []);
  console.log(events);

  return (
    <div className={styles.container}>
      <Head>
        <title>IEEE NSAKCET Events </title>
        <meta
          name="description"
          content="Events by IEEE NSAKCET Student Branch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button>
          <Link href="/events/add-event">Add Event</Link>
        </Button>
        <section>
          <h1 className={styles.title}>Upcoming Events</h1>
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
        <section className={styles.event__categories}>
          <h1 className={styles.title}>Event Categories</h1>
          <p className={styles.sub__title}>Sort through the best events</p>
          <div className={styles.event__categories__list}>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
              onClick={() => {
                setEventType("concert");
              }}
            >
              Concert
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
              onClick={() => {
                setEventType("conference");
              }}
            >
              Conference
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
              onClick={() => {
                setEventType("quiz");
              }}
            >
              Quiz
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
            >
              Workshop
            </Button>
            <Button
              variant="contained"
              className={styles.event__categories__list__button}
            >
              Seminar
            </Button>
          </div>
          <div className={styles.events__container}>
            {eventCat.map((event) => {
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
      </main>
      <Footer />
    </div>
  );
}
