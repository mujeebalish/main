import {auth, signInWithEmailAndPassword } from "../dashbord/firebase.js";
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", ()=>{
    event.preventDefault()
    
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Signin Successful")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    
  });

    
})