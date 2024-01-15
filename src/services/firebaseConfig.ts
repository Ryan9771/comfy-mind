// Functions needed from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtnmBrrKSbxE0SSD1kE27zBrnfns6uiYc",
  authDomain: "comfy-mind-db968.firebaseapp.com",
  projectId: "comfy-mind-db968",
  storageBucket: "comfy-mind-db968.appspot.com",
  messagingSenderId: "67623707972",
  appId: "1:67623707972:web:1928f5b6033399dfafe311",
  measurementId: "G-QJTC4Y114Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Needed services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Specific collections in db
export const usersCollection = collection(db, "users");