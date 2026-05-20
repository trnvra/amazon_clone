// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbs7kHH3BojGUAtupsnUtDbHHiW2M4qrQ",
  authDomain: "clone-98b3f.firebaseapp.com",
  projectId: "clone-98b3f",
  storageBucket: "clone-98b3f.appspot.com",
  messagingSenderId: "432050318661",
  appId: "1:432050318661:web:b60bd63b4539bcbe05a22c",
  measurementId: "G-QXLJ4B3Q95"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db to use in your app
export { auth, db };


