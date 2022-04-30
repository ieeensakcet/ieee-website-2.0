import { useState } from "react";
import { Avatar, Button, Stack, TextField } from "@mui/material";

function WriteComment() {
  const [commentTxt, setCommentTxt] = useState("");

  return (
    <div style={{ padding: "15px" }}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Avatar
          src="https://images.unsplash.com/photo-1567446362432-f30e36eb96c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="user-avatar"
        />
        <TextField
          multiline
          fullWidth
          minRows={4}
          id="outlined-multilined"
          placeholder="Write a Review"
          value={commentTxt}
          onChange={(e) => {
            setCommentTxt(e.target.value);
          }}
        />
        <Button
          size="large"
          sx={{
            bgcolor: "custom.moderateBlue",
            color: "neutral.white",
            p: "8px 25px",
            "&:hover": {
              bgcolor: "custom.lightGrayishBlue",
            },
          }}
          onClick={(e) => {
            !commentTxt.trim()
              ? e.preventDefault()
              : addComment(commentTxt.trim());
            setCommentTxt("");
          }}
        >
          Send
        </Button>
      </Stack>
    </div>
  );
}

export default WriteComment;
