import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "./firebase";

const studentRef = collection(db, "students");

// Add Student
export const addStudent = async (student) => {
  return await addDoc(studentRef, student);
};

// Get All Students
export const getStudents = async () => {
  const snapshot = await getDocs(studentRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Get One Student
export const getStudent = async (id) => {
  const studentDoc = doc(db, "students", id);
  const result = await getDoc(studentDoc);

  return {
    id: result.id,
    ...result.data(),
  };
};

// Update Student
export const updateStudent = async (id, data) => {
  const studentDoc = doc(db, "students", id);

  return await updateDoc(studentDoc, data);
};

// Delete Student
export const deleteStudent = async (id) => {
  const studentDoc = doc(db, "students", id);

  return await deleteDoc(studentDoc);
};
