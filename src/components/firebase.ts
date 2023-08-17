// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBO107C7FXURFgHFa2kfj5AKXu--Z-t46Q",
  authDomain: "blogreact-b8387.firebaseapp.com",
  projectId: "blogreact-b8387",
  storageBucket: "blogreact-b8387.appspot.com",
  messagingSenderId: "1098841125799",
  appId: "1:1098841125799:web:13309fa1194820708afc82",
  measurementId: "G-G1DH5PE7L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, analytics, firestore };
export const db = getFirestore(app);