

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPAm8-q16Kf0oWgOkkD96-gE4tm6b-3A8",
  authDomain: "mujeeb-385b0.firebaseapp.com",
  projectId: "mujeeb-385b0",
  storageBucket: "mujeeb-385b0.appspot.com",
  messagingSenderId: "593255510425",
  appId: "1:593255510425:web:35e485a37fdaa2fc24e308",
  measurementId: "G-EV0TY007C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail}
