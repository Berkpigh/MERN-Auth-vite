// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3b484.firebaseapp.com",
  projectId: "mern-auth-3b484",
  storageBucket: "mern-auth-3b484.appspot.com",
  messagingSenderId: "494100632713",
  appId: "1:494100632713:web:a2b22653374014dd38a258"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);