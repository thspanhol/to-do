import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNMrf_8GqoaZCGJzbiALMz6vHLgw7XzDI",
  authDomain: "fire-todo-6342c.firebaseapp.com",
  projectId: "fire-todo-6342c",
  storageBucket: "fire-todo-6342c.appspot.com",
  messagingSenderId: "898364281733",
  appId: "1:898364281733:web:12d0f372f2ed2d0a222aec",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
