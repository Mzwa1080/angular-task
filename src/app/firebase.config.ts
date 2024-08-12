// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBH39jVq0zkthIAEuTH_jFhrCB5OKgvwrM",
  authDomain: "angular-task-b208b.firebaseapp.com",
  projectId: "angular-task-b208b",
  storageBucket: "angular-task-b208b.appspot.com",
  messagingSenderId: "126722039483",
  appId: "1:126722039483:web:1c24d530d051890422d39e",
  measurementId: "G-Z2G8T34T7Q"
};

export const firebaseApp = initializeApp(firebaseConfig);