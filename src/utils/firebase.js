// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRIjPC7AoWFeMmQfnwQ_w_SEobDeTL0Xg",
  authDomain: "kk-scheduler.firebaseapp.com",
  projectId: "kk-scheduler",
  storageBucket: "kk-scheduler.appspot.com",
  messagingSenderId: "971643474837",
  appId: "1:971643474837:web:e98153dfa80a9ce6bddc9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const agendaDocs = collection(db, "agendas");
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
