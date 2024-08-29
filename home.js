import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js"




const para = document.querySelector("#para");
const div = document.querySelector("#div")

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      div.innerHTML=`
                  <div class="dropdown m-3 mt-4">
                    <button class="btn bg-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fs-3 text-light fa-solid fa-bars"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./student-form.html">Generate Form</a></li>
                        <button id="btn" class="border border-light bg-white m-2">logout</button>
                    </ul>
                  </div>
      `
      console.log(uid);


    } else {
        para.innerHTML=
        `<a href="./login.html">Login</a>`
    }
  });

  const btn = document.querySelector("#btn");

  btn.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
     window.location="login.html"
    }).catch((error) => {
        // An error happened.
      });
  })



  