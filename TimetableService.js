import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";

import { db } from "./firebase";

const timetableRef = collection(db, "timetable");

export const addTimetable = async (data) => {
  return await addDoc(timetableRef, data);
};

export const getTimetable = async () => {
  const snapshot = await getDocs(timetableRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
