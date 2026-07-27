import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase";

const attendanceRef = collection(db, "attendance");

// Mark Attendance
export const markAttendance = async (attendance) => {
  return await addDoc(attendanceRef, attendance);
};

// Get Attendance
export const getAttendance = async () => {
  const snapshot = await getDocs(attendanceRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
