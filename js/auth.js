import { auth } from "firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const ADMIN_EMAIL = "yesobasistanhs@gmail.com"; // Replace with your admin email

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      if (userCredential.user.email === ADMIN_EMAIL) {
        window.location.href = "admin.html";
      } else {
        window.location.href = "members.html";
      }

    })
    .catch((error) => {
      document.getElementById("loginMessage").textContent = error.message;
    });
});
