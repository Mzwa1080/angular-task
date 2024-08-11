// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfP4hTdzJU-IDCgGDcoK6am7btkW4sCvA",
  authDomain: "angular-task-84d0b.firebaseapp.com",
  projectId: "angular-task-84d0b",
  storageBucket: "angular-task-84d0b.appspot.com",
  messagingSenderId: "15711159737",
  appId: "1:15711159737:web:ea9d3734a56c5ad9f96268",
  measurementId: "G-7LEP626ES7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);