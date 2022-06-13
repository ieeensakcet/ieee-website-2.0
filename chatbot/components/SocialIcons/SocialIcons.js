import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from "./SocialIcons.module.css";

const SocialIcons = (props) => {
  return (
    <ul className={styles.link_list}>
      <li className={styles.link_list_item}>
        <a
          href="https://twitter.com/ieeensakcet"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.icon_button} ${styles.twitter}`}
        >
          <i className={styles.icon_twitter}>
            <TwitterIcon />
          </i>
          <span></span>
        </a>
      </li>
      <li className={styles.link_list_item}>
        <a
          href="https://linkedin.com/company/ieeensakcet"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.icon_button} ${styles.linkedin}`}
        >
          <i className={styles.icon_linkedin}>
            <LinkedInIcon />
          </i>
          <span></span>
        </a>
      </li>
      <li className={styles.link_list_item}>
        <a
          href="https://instagram.com/ieeensakcet"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.icon_button} ${styles.instagram}`}
        >
          <i className={styles.icon_instagram}>
            <InstagramIcon />
          </i>
          <span></span>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
