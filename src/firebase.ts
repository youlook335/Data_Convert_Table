// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEmYGPJPMhikh8uaq41tNYOItdPJ14RfM",
  authDomain: "firestore-crud-ts.firebaseapp.com",
  projectId: "firestore-crud-ts",
  storageBucket: "firestore-crud-ts.firebasestorage.app",
  messagingSenderId: "851409154793",
  appId: "1:851409154793:web:0498cea37ba7360af83678",
  measurementId: "G-L3LVSGW6FQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { app }; // 👈 یہ لائن add کرو!
