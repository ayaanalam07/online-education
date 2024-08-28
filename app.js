import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";


const email = document.querySelector("#email")
const password = document.querySelector("#password")
const userName = document.querySelector("#username")
const form = document.querySelector("#form")








form.addEventListener("submit" , (event)=>{
    
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value , userName.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        
    });

    email.value=""
    password.value=""
    userName.value=""

})

