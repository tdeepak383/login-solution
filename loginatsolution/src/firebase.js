
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW0uchjEz_xv9jV5Qo3MxlDkGb1yrnXUM",
  authDomain: "loginatsolution-acefa.firebaseapp.com",
  projectId: "loginatsolution-acefa",
  storageBucket: "loginatsolution-acefa.firebasestorage.app",
  messagingSenderId: "451065155723",
  appId: "1:451065155723:web:d18cd749334dd4567fc48e",
  measurementId: "G-S8E1J49HFV"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);