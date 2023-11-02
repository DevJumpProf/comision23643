// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3PkJRrVWu1RH1HmS6T3kZzWyypUAvpKM",
  authDomain: "cac-23643.firebaseapp.com",
  projectId: "cac-23643",
  storageBucket: "cac-23643.appspot.com",
  messagingSenderId: "404579416670",
  appId: "1:404579416670:web:32f7d321677b5b2d2e12cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)




