import { auth } from "firebase.js";

import {

signOut

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("logoutBtn").addEventListener("click",()=>{

signOut(auth).then(()=>{

window.location.href="login.html";

});

});

/* Temporary Demo Data */

document.getElementById("totalMembers").textContent=150;

document.getElementById("presentToday").textContent=87;

document.getElementById("activitiesCount").textContent=18;

document.getElementById("treesPlanted").textContent=1230;

import { auth } from "firebase.js";

import {
    signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
        await signOut(auth);
        window.location.href = "login.html";
    });
}
