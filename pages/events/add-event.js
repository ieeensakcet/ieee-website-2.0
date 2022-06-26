import React from "react";
import { useSelector } from "react-redux";
import EventForm from "../../components/eventForm/EventForm";
import { selectUser } from "../../features/userSlice";
import SignIn from "../../components/signin/SignIn";

function AddEvent() {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? (
        <>
          <h1 style={{ color: "#12679b", textAlign: "center" }}>
            Create Event
          </h1>
          <EventForm />
        </>
      ) : (
        <div
          style={{
            width: "90%",
            maxWidth: "400px",
            margin: "50px auto"
          }}
        >
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default AddEvent;
