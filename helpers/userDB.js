import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// collection ref
const usersCollectionRef = collection(db, "users");

const addUser = async (data) => {
  await addDoc(
    usersCollectionRef,
    {
      email: data.email,
      displayName: data.displayName,
      customClaims: data.role,
      membershipNumber: data.membershipNumber,
      // uid: data.uid,
    }
  );
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

export {addUser, updateUser, deleteUser}