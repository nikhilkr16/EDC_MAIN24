import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSmrIyV7cudLaCO9q6frwYIzUqEks2HQQ",
  authDomain: "wastewise-24588.firebaseapp.com",
  projectId: "wastewise-24588",
  storageBucket: "wastewise-24588.appspot.com",
  messagingSenderId: "770800519231",
  appId: "1:770800519231:web:02e7afd51bb75a7f04d08a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
