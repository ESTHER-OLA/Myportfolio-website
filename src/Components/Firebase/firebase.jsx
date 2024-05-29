// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD20xhM3sJ_k44pFbcMUqL_EzWmXhucQ-4",
  authDomain: "portfolio-website-239f6.firebaseapp.com",
  projectId: "portfolio-website-239f6",
  storageBucket: "portfolio-website-239f6.appspot.com",
  messagingSenderId: "1051344182304",
  appId: "1:1051344182304:web:45925a876c8bee6ce43045",
  measurementId: "G-SRLKFS5WBK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Access the Firestore database using app.firestore()
export { db }; // Export the Firestore database instance
