import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCll7aDnMjXb7cGFivKEem4rHKTzhtIwH8",
    authDomain: "pdfbot-8fd78.firebaseapp.com",
    projectId: "pdfbot-8fd78",
    storageBucket: "pdfbot-8fd78.firebasestorage.app",
    messagingSenderId: "692230833512",
    appId: "1:692230833512:web:80af7b5a5dc2505df582dd",
    measurementId: "G-3RS4XPJVRB"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };