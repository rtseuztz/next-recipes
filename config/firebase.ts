// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIkapXlaS8MWceY96NBjPJcFTLoSZRRvE",
  authDomain: "recipies-543b0.firebaseapp.com",
  projectId: "recipies-543b0",
  storageBucket: "recipies-543b0.appspot.com",
  messagingSenderId: "465547038876",
  appId: "1:465547038876:web:611f4e2ed677222cb6dd59",
  measurementId: "G-FLMJFFG0CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
