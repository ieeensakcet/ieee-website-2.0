import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import styles from "../../styles/Dashboard.module.css";
import { Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import SignIn from "../../components/signin/SignIn";
import useProvideAuth from "../../utils/auth";
import UsersTable from "../../components/usersTable/UsersTable";
import EventCard from "../../components/eventCard/EventCard";

export default function Dashboard() {
  const auth = useProvideAuth();
  const user = useSelector(selectUser);

  const [events, setEvents] = useState([]);
  const [draftEvents, setDraftEvents] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "events"), where("scheduleType", "==", "schedule")),
      (querySnapshot) => {
        setEvents(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    );
    const unsub = onSnapshot(
      query(collection(db, "events"), where("scheduleType", "==", "draft")),
      (querySnapshot) => {
        setDraftEvents(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    );

    return () => {
      unsubscribe();
      unsub();
    };
  }, []);

  const logOut = () => {
    auth.signout();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user ? (
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>
            <span className={styles.title__border}>Adm</span>in Dashboard
          </h1>
          <div className={styles.title__userInfo}>
            <Typography variant="subtitle1">
              Logged In as <b>{user?.name}</b>
            </Typography>
            <Button
              variant="contained"
              endIcon={<LogoutIcon />}
              sx={{ backgroundColor: "#db2b39" }}
              onClick={logOut}
            >
              Logout
            </Button>
          </div>
        </div>
        <section>
          <h1 className={styles.events__title}>Upcoming Events</h1>
          {events.length ? (
            <div className={styles.events__container}>
              {events.map((event) => {
                return (
                  <EventCard
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    venue={event.venue}
                    date={event.date?.seconds}
                  />
                );
              })}
            </div>
          ) : (
            "No Upcoming events"
          )}
        </section>
        <section className={styles.draft__events}>
          <h1 className={styles.events__title}>Draft Events</h1>
          {draftEvents.length ? (
            <div className={styles.events__container}>
              {draftEvents.map((event) => {
                return (
                  <EventCard
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    venue={event.venue}
                    date={event.date?.seconds}
                  />
                );
              })}
            </div>
          ) : (
            "No draft events"
          )}
        </section>
        <UsersTable />
      </main>
      ) : (
        <div className={styles.login}>
          <SignIn />
        </div>
      )}
      <Footer />
    </div>
  );
}
