import { collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// collection ref
const eventsCollectionRef = collection(db, "events");

const addEvent = async (data) => {
  await addDoc(
    eventsCollectionRef,
    {
      title: data.title,
      eventType: data.eventType,
      date: data.date,
      venue: data.venue,
      description: data.description,
      details: data.details,
      images: data.images,
      reviews: data.reviews,
      link: data.link,
      scheduleType: data.scheduleType,
    }
  );
};

const updateEvent = async (id, age) => {
  const eventDoc = doc(db, "events", id);
  const newFields = { age: age + 1 };
  await updateDoc(eventDoc, newFields);
};

const deleteEvent = async (id) => {
  const eventDoc = doc(db, "events", id);
  await deleteDoc(eventDoc);
};

export {addEvent, updateEvent, deleteEvent}