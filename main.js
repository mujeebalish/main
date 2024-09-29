import {signInWithPopup, auth, signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail,GoogleAuthProvider,} from "./dashbord/firebase.js";
// AdminBtn

document.getElementById('adminBtn').addEventListener('click', function() {
    document.getElementById('adminLogin').classList.add('active');
    document.getElementById('studentLogin').classList.remove('active');
    var email = document.getElementById("admin-email");
   var password = document.getElementById("admin-password");
   email.value = "";
   password.value = "";
  });
  // StudentBtn
  document.getElementById('studentBtn').addEventListener('click', function() {
    document.getElementById('studentLogin').classList.add('active');
    document.getElementById('adminLogin').classList.remove('active');
    let register = document.getElementById("para");
    var studentEmail = document.getElementById("student-email");
    var studentPassword = document.getElementById("student-password");
   register.style.visibility = "hidden"
   
   
    studentEmail.value = "";
    studentPassword.value = ""
  });
     
      
       // Admin login button

       document.getElementById('adminloginBtn').addEventListener('click', () => {
       let email = document.getElementById('admin-email');
       let password = document.getElementById('admin-password');
       event.preventDefault()
       signInWithEmailAndPassword(auth, email.value, password.value)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         Toastify({
          text: "Login successful",
            duration: 3000
            }).showToast();
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         Toastify({
          text: errorMessage,
            duration: 3000
            }).showToast();
       });
       email.value = "";
      password.value = "";
      // 
      }); 
      /*onAuthStateChanged(auth, (user) => {
          if (user) {
          location.replace ("./dashbord/dashbord.html");
          } 
        });*/
      
        
        
      // forgot password
      let forgotPassword = document.getElementById("forgot-password");
       forgotPassword.addEventListener("click", () => {
        let email = document.getElementById('admin-email');
        sendPasswordResetEmail(auth, email.value)
  .then(() => {
    Toastify({
    text: "A password reset link has been send to your email",
      duration: 3000
      }).showToast();
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({

      text: errorMessage,
      
      duration: 3000
      
      }).showToast();
      

    // ..
   });
   })
       let googleBtn = document.getElementById("googleBtn");
       const provider = new GoogleAuthProvider();
       let googlelogin = ( () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          Toastify({
        text: user,
      duration: 3000
      }).showToast();
          // alert(user)
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Toastify({
        text: errorMessage,
      duration: 3000
      }).showToast();
          // alert(errorMessage)
                   const credential = GoogleAuthProvider.credentialFromError(error);
        
        });
      }) 
       googleBtn.addEventListener("click", googlelogin)

       // Student login button
      let studentloginBtn = document.getElementById('studentloginBtn');
       let studentlogbtn = ( () => {
        let email = document.getElementById('student-email');
        let password = document.getElementById('student-password');
        event.preventDefault()
        signInWithEmailAndPassword(auth, email.value, password.value)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         Toastify({
          text: "Login successful",
            duration: 3000
            }).showToast();
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         Toastify({
          text: errorMessage,
            duration: 3000
            }).showToast();
       });
       email.value = "";
      password.value = "";
        //  console.log(email.value, password.value);
          email.value = "";
          password.value = ""} )
         studentloginBtn.addEventListener("click", studentlogbtn);
         let studentForgotPassword = document.getElementById("studet-forgot-password");
       studentForgotPassword.addEventListener("click", () => {
        let email = document.getElementById('student-email');
        sendPasswordResetEmail(auth, email.value)
  .then(() => {
    Toastify({
    text: "A password reset link has been send to your email",
      duration: 3000
      }).showToast();
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({

      text: errorMessage,
      
      duration: 3000
      
      }).showToast();
      

    // ..
   });
   })
        
      
      
        
     
      
       
         
      
       




        
        
         
         
         
        