import { auth, db } from "firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

onAuthStateChanged(auth, async(user)=>{

    if(!user){

        location.href="login.html";

        return;

    }

    const snap = await getDoc(doc(db, "User", user.uid));
   
    if(!snap.exists()){

        location.href="login.html";

        return;

    }

    if(snap.data().role!=="admin"){

        alert("Administrator access only.");

        location.href="members.html";

    }

});
