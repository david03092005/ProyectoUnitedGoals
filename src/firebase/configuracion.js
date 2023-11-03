// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFB_3pj24xz2Tyx5bG-R2SJaM2WOfefZc",
  authDomain: "united-goals.firebaseapp.com",
  projectId: "united-goals",
  storageBucket: "united-goals.appspot.com",
  messagingSenderId: "786491398072",
  appId: "1:786491398072:web:56740632c4c98e9713a14d",
  measurementId: "G-BKHBFT8C3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};