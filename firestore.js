import { db } from "./firebase";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const studentCollection = collection(db, "students");

export const getStudents = async () => {
  const data = await getDocs(studentCollection);

  return data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addStudent = async (student) => {
  await addDoc(studentCollection, student);
};

export const updateStudent = async (id, student) => {
  const studentDoc = doc(db, "students", id);

  await updateDoc(studentDoc, student);
};

export const deleteStudent = async (id) => {
  const studentDoc = doc(db, "students", id);

  await deleteDoc(studentDoc);
};
