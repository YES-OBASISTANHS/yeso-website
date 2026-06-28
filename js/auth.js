import { auth, db } from "firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const userCredential =
            await signInWithEmailAndPassword(auth,email,password);

        const user = userCredential.user;

        const userRef = doc(db,"users",user.uid);

        const snap = await getDoc(userRef);

        if(!snap.exists()){

            alert("Account not registered.");

            return;

        }

        const data = snap.data();

        if(data.role==="admin"){

            window.location.href="admin.html";

        }else{

            window.location.href="members.html";

        }

    }catch(error){

        document.getElementById("loginMessage").textContent=error.message;

    }

});
