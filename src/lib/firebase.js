import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-744.firebaseapp.com",
  projectId: "reactchat-744",
  storageBucket: "reactchat-744.appspot.com",
  messagingSenderId: "345264879584",
  appId: "1:345264879584:web:26b8fa52e19369be619d85",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();