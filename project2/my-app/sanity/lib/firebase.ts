// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
import   'firebase/auth'; // Correctly import the auth object from your firebase.ts file

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcMPDM8MIVwsTAP8IOeiKUO02rvZ8c16M",
  authDomain: "e-commerce-ae8c5.firebaseapp.com",
  projectId: "e-commerce-ae8c5",
  storageBucket: "e-commerce-ae8c5.appspot.com",
  messagingSenderId: "639554917102",
  appId: "1:639554917102:web:d849fb06fab3dd4aff19ff",
 
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;