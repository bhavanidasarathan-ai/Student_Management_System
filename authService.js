import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase";

// Register
export const register = async (email, password) => {
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
};

// Login
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

// Logout
export const logout = async () => {
  return await signOut(auth);
};

// Reset Password
export const resetPassword = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

// Current User Listener
export const authListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Current User
export const getCurrentUser = () => {
  return auth.currentUser;
};
