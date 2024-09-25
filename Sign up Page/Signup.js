 import {auth, createUserWithEmailAndPassword } from "../dashbord/firebase.js";

 document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const idCard = document.getElementById('id-card').value;
    const userType = document.getElementById('user-type').value;
    
createUserWithEmailAndPassword(auth,email, password,)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Register Successful");
    window.location.href = '.html'
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    
    // ..
  });

    
});

