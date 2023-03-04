import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBINaZmtMd_lU1vMXQJxzo4Nn8ILQDMmAM",
  authDomain: "tik-tok-clone-12d14.firebaseapp.com",
  projectId: "tik-tok-clone-12d14",
  storageBucket: "tik-tok-clone-12d14.appspot.com",
  messagingSenderId: "1026811117377",
  appId: "1:1026811117377:web:15edc11ad774f8f2fb6bc0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
