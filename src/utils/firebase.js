// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxplESs_zDJU9lysqiBvIDGPl13xA9WiY",
  authDomain: "shashank-1234.firebaseapp.com",
  projectId: "shashank-1234",
  storageBucket: "shashank-1234.firebasestorage.app",
  messagingSenderId: "1019466240313",
  appId: "1:1019466240313:web:56b7cb8fb7d017f28818e8",
  measurementId: "G-GJSDCFXX0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
