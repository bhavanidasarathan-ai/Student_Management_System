import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getUserRole = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));

  if (userDoc.exists()) {
    return userDoc.data().role;
  }

  return null;
};
