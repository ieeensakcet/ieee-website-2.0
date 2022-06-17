import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import EventForm from "../../../components/eventForm/EventForm";

function Edit({ id }) {
  const [data, setdata] = useState();
  useEffect(() => {
    getData(id);
  }, [id]);

  async function getData(id) {
    const docRef = doc(db, "events", `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setdata(docSnap.data());
    //   console.log(data)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <div>
      <h1 style={{color: "#12679b", textAlign: "center"}}>Update Event</h1>
      <EventForm form={data} id={id}/>
    </div>
  );
}

export default Edit;

export async function getServerSideProps({ params }) {
  return {
    props: { id: params.id },
  };
}
