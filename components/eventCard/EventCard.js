import { Button, Paper } from "@mui/material";
import Image from "next/image";
import styles from "./EventCard.module.css";

export default function EventCard() {
  return (
    <div className={styles.container}>
      <Paper
        elevation={3}
        sx={{
          width: "265px",
          height: "150px",
          zIndex: "10",
          position: "absolute",
          top: "0px",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <Image alt="image" src="https://images.unsplash.com/photo-1567446362432-f30e36eb96c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" layout="fill"/>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          width: "340px",
          height: "260px",
          position: "absolute",
          bottom: "0px",
          borderRadius: "18px",
          padding: "0 36.5px",
          paddingTop: "100px",
        }}
      >
        <div className={styles.card__header}>
          <p>16 Aug 2021</p>
          <p>Hyderabad</p>
        </div>
        <h4 className={styles.card__title}>
          Text header title of the program. this can extend upto 2 lines
        </h4>
        {/* <button className={styles.card__button}>Book Your Seat</button> */}
        <Button
          variant="contained"
          sx={{ borderRadius: "12px", fontSize: "12px", marginTop: "12px" }}
        >
          Read More
        </Button>
      </Paper>
    </div>
  );
}
