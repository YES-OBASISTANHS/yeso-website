import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6lq2K4qWQZWryyCaUR0IqSZgMBCNF8f8",
  authDomain: "yes-o-website.firebaseapp.com",
  projectId: "yes-o-website",
  storageBucket: "yes-o-website.firebasestorage.app",
  messagingSenderId: "797990532058",
  appId: "1:797990532058:web:6814ba37c3e2d0cdbf06e3",
  measurementId: "G-J8KN8VPD3J"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, storage, googleProvider };
