import { auth, signInWithEmailAndPassword } from "./dashbord/firebase.js";
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
        adminLogin.innerText= "Loading....."
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
      //  alert(errorMessage);
       
        
         email.value = "";
         password.value = ""
        
       });
       // Student login button
       /*document.getElementById('studentloginBtn').addEventListener('click', () => {
        let email = document.getElementById('student-email');
        let password = document.getElementById('student-password');
        event.preventDefault()
         console.log(email.value, password.value);
          email.value = "";
          password.value = ""
         
        });*/
       




        
        
         
         
         
        