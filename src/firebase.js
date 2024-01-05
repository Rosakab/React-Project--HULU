 
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC4PaoaIrE_pdYHrF-yk1oXUtnxJGABvU",
  authDomain: "hulu-2d10b.firebaseapp.com",
  projectId: "hulu-2d10b",
  storageBucket: "hulu-2d10b.appspot.com",
  messagingSenderId: "129655686548",
  appId: "1:129655686548:web:f4ae6f9790556e85e7bb81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
const storage = getStorage(app);
export const db = getFirestore(app)