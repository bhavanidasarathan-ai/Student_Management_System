import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "./firebase";

const teacherCollection = collection(db, "teachers");

// Add Teacher
export const addTeacher = async (teacher) => {
  return await addDoc(teacherCollection, teacher);
};

// Get All Teachers
export const getTeachers = async () => {
  const snapshot = await getDocs(teacherCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Get Single Teacher
export const getTeacher = async (id) => {
  const teacherDoc = doc(db, "teachers", id);
  const result = await getDoc(teacherDoc);

  return {
    id: result.id,
    ...result.data(),
  };
};

// Update Teacher
export const updateTeacher = async (id, teacher) => {
  const teacherDoc = doc(db, "teachers", id);

  return await updateDoc(teacherDoc, teacher);
};

// Delete Teacher
export const deleteTeacher = async (id) => {
  const teacherDoc = doc(db, "teachers", id);

  return await deleteDoc(teacherDoc);
};
