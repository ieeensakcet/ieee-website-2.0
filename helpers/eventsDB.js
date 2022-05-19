import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// collection ref
const eventsCollectionRef = collection(db, "events");

const addEvent = async (data) => {
  await addDoc(eventsCollectionRef, {
    title: data.title,
    eventType: data.eventType,
    date: data.date,
    venue: data.venue,
    description: data.description,
    details: data.details,
    images: data.images,
    link: data.link,
    scheduleType: data.scheduleType,
  });
};

const updateEvent = async (id, data) => {
  console.log(id)
  console.log(data)
  const eventDocRef = doc(db, "events", id);
  const updateFields = {
    title: data.title,
    eventType: data.eventType,
    date: data.date,
    venue: data.venue,
    description: data.description,
    details: data.details,
    // images: data.images,
    link: data.link,
    scheduleType: data.scheduleType,
  };
  await updateDoc(eventDocRef, updateFields);
};

const deleteEvent = async (id) => {
  const eventDocRef = doc(db, "events", id);
  await deleteDoc(eventDocRef);
};

export { addEvent, updateEvent, deleteEvent };
