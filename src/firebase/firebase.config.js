// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB39Mw01iR5fUVS9zTDkEkqDQbpiqBlqBs",
  authDomain: "fir-project-273e4.firebaseapp.com",
  projectId: "fir-project-273e4",
  storageBucket: "fir-project-273e4.firebasestorage.app",
  messagingSenderId: "1098084317998",
  appId: "1:1098084317998:web:a9e1da230d232c2784d8bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 //Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
