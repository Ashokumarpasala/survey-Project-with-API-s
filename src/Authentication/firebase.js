// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7RmV_c3wTB8TV9Dyf9uOdPrNxCDznBAU",
  authDomain: "survey-registration.firebaseapp.com",
  projectId: "survey-registration",
  storageBucket: "survey-registration.appspot.com",
  messagingSenderId: "98012872767",
  appId: "1:98012872767:web:bfa85db89f05332b4bb88a",
  measurementId: "G-F29CY3RF5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

