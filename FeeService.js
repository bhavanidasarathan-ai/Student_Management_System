import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { db } from "./firebase";

const feeCollection = collection(db, "fees");

// Add Fee
export const addFee = async (fee) => {
  return await addDoc(feeCollection, fee);
};

// Get All Fees
export const getFees = async () => {
  const snapshot = await getDocs(feeCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Update Fee
export const updateFee = async (id, data) => {
  const feeDoc = doc(db, "fees", id);

  return await updateDoc(feeDoc, data);
};

// Delete Fee
export const deleteFee = async (id) => {
  const feeDoc = doc(db, "fees", id);

  return await deleteDoc(feeDoc);
};
