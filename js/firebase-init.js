import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_szOcGNYfkQVopi2envbgVHEnSAjGNK0",
  authDomain: "tradex-corp-cd4a3.firebaseapp.com",
  projectId: "tradex-corp-cd4a3",
  storageBucket: "tradex-corp-cd4a3.firebasestorage.app",
  messagingSenderId: "231453438372",
  appId: "1:231453438372:web:7c0205a4ec688e3a5b9131"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);