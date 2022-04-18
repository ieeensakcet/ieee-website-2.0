import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// collection ref
const usersCollectionRef = collection(db, "users");

const createUser = async () => {
  await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
};

const updateUser = async (id, age) => {
  const userDoc = doc(db, "users", id);
  const newFields = { age: age + 1 };
  await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};