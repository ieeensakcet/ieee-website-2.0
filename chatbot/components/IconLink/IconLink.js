import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";

import styles from "./IconLink.module.css";

const IconLink = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className={styles.link_list_item}>
      <Button
        startIcon={<ListIcon />}
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "10px",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#12679b",
            color: "#fff",
          },
        }}
      >
        {link.text}
      </Button>
    </li>
  ));

  return <ul className={styles.link_list}>{linkMarkup}</ul>;
};

export default IconLink;
