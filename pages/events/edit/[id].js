import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import EventForm from "../../../components/eventForm/EventForm";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import SignIn from "../../../components/signin/SignIn";

function Edit({ id }) {
  const user = useSelector(selectUser);

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
      {user ? (
        <>
          <h1 style={{ color: "#12679b", textAlign: "center" }}>
            Update Event
          </h1>
          <EventForm form={data} id={id} />
        </>
      ) : (
        <div
          style={{
            width: "90%",
            maxWidth: "400px",
            margin: "50px auto",
          }}
        >
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default Edit;

export async function getServerSideProps({ params }) {
  return {
    props: { id: params.id },
  };
}
