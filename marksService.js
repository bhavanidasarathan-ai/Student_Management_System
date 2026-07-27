import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase";

const marksRef = collection(db, "marks");

// Add Marks
export const addMarks = async (mark) => {
  return await addDoc(marksRef, mark);
};

// Get Marks
export const getMarks = async () => {
  const snapshot = await getDocs(marksRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
