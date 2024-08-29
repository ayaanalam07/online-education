import { signInWithEmailAndPassword , sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";



const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const forgotPassword = document.querySelector("#forgot");



form.addEventListener("submit" , (event)=>{
event.preventDefault();

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert("You Are Login")
    window.location = "index.html"
})
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });

})



forgotPassword.addEventListener("click", () => {
  const resetEmail = prompt("enter email");
  sendPasswordResetEmail(auth, resetEmail)
    .then(() => {
      alert("email send");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});