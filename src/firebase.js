// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNMrf_8GqoaZCGJzbiALMz6vHLgw7XzDI",
  authDomain: "fire-todo-6342c.firebaseapp.com",
  projectId: "fire-todo-6342c",
  storageBucket: "fire-todo-6342c.appspot.com",
  messagingSenderId: "898364281733",
  appId: "1:898364281733:web:12d0f372f2ed2d0a222aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);