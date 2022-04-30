// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIvxq32s92r0JC9HX-xbocLKIsQcLPucM",
  authDomain: "educational-site-react.firebaseapp.com",
  projectId: "educational-site-react",
  storageBucket: "educational-site-react.appspot.com",
  messagingSenderId: "1014397710381",
  appId: "1:1014397710381:web:e244e01a2272bf323f48a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;