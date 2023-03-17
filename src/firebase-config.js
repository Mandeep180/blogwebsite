// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_WrcDYjTURBVfnBwgP96vr9NNMtUtRw",
  authDomain: "blogproject-1f754.firebaseapp.com",
  projectId: "blogproject-1f754",
  storageBucket: "blogproject-1f754.appspot.com",
  messagingSenderId: "636450188777",
  appId: "1:636450188777:web:d7f9eeca3b154542c82f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();