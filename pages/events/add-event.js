import React from "react";
import EventForm from "../../components/eventForm/EventForm";

function AddEvent() {
  return (
    <div>
      <h1 style={{color: "#12679b", textAlign: "center"}}>Create Event</h1>
      <EventForm />
    </div>
  );
}

export default AddEvent;
