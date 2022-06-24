import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import Image from "next/image";
import styles from "./EventCard.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import Link from "next/link";
import { deleteEvent } from "../../helpers/eventsDB";
import { timeConverter } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function EventCard({ id, title, venue, date, image }) {
  const user = useSelector(selectUser);

  const dateToShow = timeConverter(date);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //delete warning modal
  const [DeleteOpen, setDeleteOpen] = useState(false);
  const DeleteHandleOpen = () => setDeleteOpen(true);
  const DeleteHandleClose = () => {
    setDeleteOpen(false);
    handleClose();
  };

  const DeleteEvent = () => {
    deleteEvent(id);
    DeleteHandleClose();
  };
  return (
    <div className={styles.container}>
      <Paper
        elevation={3}
        sx={{
          width: "255px",
          height: "170px",
          zIndex: "10",
          position: "absolute",
          top: "0px",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <Image alt="image" src={image} layout="fill" />
      </Paper>
      <Paper
        elevation={3}
        sx={{
          width: "300px",
          height: "240px",
          position: "absolute",
          bottom: "0px",
          borderRadius: "18px",
          padding: "0 25px",
          paddingTop: "95px",
        }}
      >
        <div className={styles.card__header}>
          <p className={styles.date}>{dateToShow}</p>
          <p className={styles.venue}>{venue}</p>
        </div>
        <h4 className={styles.card__title}>{title}</h4>
        {/* <button className={styles.card__button}>Book Your Seat</button> */}
        <div className={styles.more}>
          <Button
            variant="outline"
            sx={{
              borderRadius: "12px",
              fontSize: "12px",
              padding: "0",
            }}
          >
            <Link href={`/events/${id}`}>Read More</Link>
          </Button>
          {user ? (
            <>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ padding: "0px" }}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 48 * 4.5,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={DeleteHandleOpen} sx={{ color: "#FF1818" }}>
                  Delete
                </MenuItem>
                <Dialog
                  open={DeleteOpen}
                  onClose={DeleteHandleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Do you really want to delete the Event? This cannot be
                      undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={DeleteHandleClose} autoFocus>
                      No
                    </Button>
                    <Button onClick={DeleteEvent} sx={{ color: "red" }}>
                      Yes, Delete Event
                    </Button>
                  </DialogActions>
                </Dialog>
                <MenuItem onClick={handleClose}>
                  <Link href={`/events/edit/${id}`}>Update</Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            ""
          )}
        </div>
      </Paper>
    </div>
  );
}
