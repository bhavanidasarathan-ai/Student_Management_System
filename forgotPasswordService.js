import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    return {
      success: true,
      message: "Password reset email sent.",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
