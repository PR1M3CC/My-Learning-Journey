import app from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Get the auth instance from the app
const auth = getAuth(app);

// Signup function
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login function
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout function
export const logout = () => {
  return signOut(auth);
};

// Auth state listener
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
