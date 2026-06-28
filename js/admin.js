import { auth } from "firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const ADMIN_EMAIL = "yesobasistanhs@gmail.com";

onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  if (user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    alert("Access denied!");
    window.location.href = "index.html";
    return;
  }

  console.log("Admin logged in:", user.email);
});

// Logout button
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
  });
}
