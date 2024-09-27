import { auth, signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail } from "./dashbord/firebase.js";
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
    var studentEmail = document.getElementById("student-email");
    var studentPassword = document.getElementById("student-password");
    studentEmail.value = "";
    studentPassword.value = ""
  });
     
      
       // Admin login button

       let adminLogin = document.getElementById('adminloginBtn').addEventListener('click', () => {
       let email = document.getElementById('admin-email');
       let password = document.getElementById('admin-password');
       event.preventDefault()
      //  adminLogin.innerText= 'Loading.....'
       signInWithEmailAndPassword(auth, email.value, password.value)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
        //  alert("Signin Successful")
        Toastify({

          text: "Successful login",
          
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
        //  alert(errorMessage);
        
        
        onAuthStateChanged(auth, (user) => {
          if (user) {
            window.location.href = './dashbord/dashbord.html'
          } 
        });
      });
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
      
      
      
        
     
      
       
         
       // Student login button
       /*document.getElementById('studentloginBtn').addEventListener('click', () => {
        let email = document.getElementById('student-email');
        let password = document.getElementById('student-password');
        event.preventDefault()
         console.log(email.value, password.value);
          email.value = "";
          password.value = ""
         
        });*/
       




        
        
         
         
         
        