import { Avatar, Divider, Grid } from "@mui/material";
const imgLink =
  "https://images.unsplash.com/photo-1567446362432-f30e36eb96c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

function Comment({review}) {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{review.user}</h4>
          <p style={{ textAlign: "justify" }}>
            {review.text}
          </p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
    </>
  );
}

export default Comment;
