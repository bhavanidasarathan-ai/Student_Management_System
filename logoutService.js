import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export const logoutUser = async () => {
  try {
    await signOut(auth);

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
