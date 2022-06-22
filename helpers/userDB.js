import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// collection ref
const usersCollectionRef = collection(db, "users");

const addUser = async (data) => {
  await setDoc(
    doc(db, "users", data.membershipNumber),
    {
      email: data.email,
      displayName: data.displayName,
      customClaims: data.role,
      membershipNumber: data.membershipNumber,
      imageURL: data.imageURL,
      linkedinURL: data.linkedinURL,
      society: data.society,
      societyRole: data.societyRole,
      excom: data.excom,
    }
  );
};

const updateUserdb = async (id, data) => {
  const userDoc = doc(db, "users", id);
  const newFields = data;
  await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};

export {addUser, updateUserdb, deleteUser}