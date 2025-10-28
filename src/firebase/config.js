// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvOSf0Pot18Sv-TTr2fz441IHwDzvKtK4",
  authDomain: "language-store-2025.firebaseapp.com",
  projectId: "language-store-2025",
  storageBucket: "language-store-2025.firebasestorage.app",
  messagingSenderId: "1003650659139",
  appId: "1:1003650659139:web:d4b2cbe0ace3405229f5f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app);
