import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  SwipeableDrawer,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Link from "next/link";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobile(open);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };

  const mobileNav = (
    <div className={styles.mobile}>
      <IconButton
        onClick={toggleDrawer(false)}
        area-label="menu"
        className={styles.buttonR}
      >
        <ChevronRightIcon />
      </IconButton>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button>
          <Link href="/" passHref className={styles.text}>
            <ListItemText primary="HOME" />
          </Link>
        </ListItem>
        <ListItem button to="/aboutus">
          <Link href="/about" passHref className={styles.text}>
            <ListItemText primary="ABOUT US" />
          </Link>
        </ListItem>
        <ListItem button onClick={handleClicks}>
          <ListItemText primary="OUR EVENTS" className={styles.text} />
          {opens ? (
            <ExpandLessIcon className={styles.buttonR} />
          ) : (
            <ExpandMoreIcon className={styles.buttonR} />
          )}
        </ListItem>
        <Collapse in={opens} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={styles.nested}>
              <Link href="/webinars" passHref className={styles.text}>
                <ListItemText primary="WEBINARS" />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/quizzes" passHref className={styles.text}>
                <ListItemText primary="QUIZES" />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/competitions" passHref className={styles.text}>
                <ListItemText primary="COMPETITIONS" />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/workshops" passHref className={styles.text}>
                <ListItemText primary="WORKSHOPS" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="OUR CHAPTERS" className={styles.text} />
          {open ? (
            <ExpandLessIcon className={styles.buttonR} />
          ) : (
            <ExpandMoreIcon className={styles.buttonR} />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={styles.nested}>
              <Link href="/cs" passHref className={styles.text}>
                <ListItemText primary="CS" />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/wie" passHref className={styles.text}>
                <ListItemText primary="WIE" />
              </Link>
            </ListItem>
            <ListItem button className={styles.nested}>
              <Link href="/ras" passHref className={styles.text}>
                <ListItemText primary="RAS" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <Link href="/ourteam" passHref className={styles.text}>
            <ListItemText primary="OUR TEAM" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link href="/joinus" passHref className={styles.text}>
            <ListItemText primary="JOIN US" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/" passHref>
          <div
            // src="https://ik.imagekit.io/ieeensakcet/tr:h-70/ieee_bDdem9m3j.png"
            className={styles.navbar__logo}
            // alt="logo"
          />
        </Link>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__list__listItem}>
            <Link href="/" passHref>
              <a className={styles.navbar__list__listItem__link}>HOME</a>
            </Link>
          </li>
          <li className={styles.navbar__list__listItem}>
            <Link href="/about" passHref>
              <a className={styles.navbar__list__listItem__link}>ABOUT US</a>
            </Link>
          </li>
          <li className={`${styles.navbar__list__listItem} ${styles.hover}`}>
            <Link href="/events" passHref>
              <a className={styles.navbar__list__listItem__link}>EVENTS</a>
            </Link>
          </li>
          <li className={`${styles.navbar__list__listItem} ${styles.hover}`}>
            <Link href="/cs" passHref>
              <a className={styles.navbar__list__listItem__link}>
                OUR CHAPTERS
              </a>
            </Link>
            <Paper
              elevation={3}
              className={`${styles.subListItem} subListItem`}
            >
              <ul className={styles.subItem}>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/cs" passHref>
                    <a className={styles.navbar__list__listItem__link__subitem}>Computer Society</a>
                  </Link>
                </li>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/ras" passHref>
                    <a className={styles.navbar__list__listItem__link__subitem}>RAS</a>
                  </Link>
                </li>
                <li className={styles.navbar__list__listItem}>
                  <Link href="/wie" passHref>
                    <a className={styles.navbar__list__listItem__link__subitem}>WIE</a>
                  </Link>
                </li>
              </ul>
            </Paper>
          </li>
          <li className={styles.navbar__list__listItem}>
            <Link href="/ourteam" passHref>
              <a className={styles.navbar__list__listItem__link}>OUR TEAM</a>
            </Link>
          </li>
          <li className={styles.navbar__list__listItem}>
            <Link
              href="/joinus"
              passHref
              className={styles.navbar__list__listItem__link}
            >
              <a className={styles.navbar__list__listItem__link}>JOIN US</a>
            </Link>
          </li>
        </ul>
        {mobile ? (
          <SwipeableDrawer
            anchor="right"
            open={mobile}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(false)}
          >
            {mobileNav}
          </SwipeableDrawer>
        ) : (
          ""
        )}
        <IconButton
          aria-label="menu"
          className={styles.button}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </nav>
    </div>
  );
};

export default NavBar;
