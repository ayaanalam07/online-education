import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";




  const firebaseConfig = {
    apiKey: "AIzaSyDi5MJtIEZw1sKG8np7SvXOpAkUXAAv81g",
    authDomain: "e-learning-219.firebaseapp.com",
    projectId: "e-learning-219",
    storageBucket: "e-learning-219.appspot.com",
    messagingSenderId: "627620378008",
    appId: "1:627620378008:web:2a8af205e2e39fc0e567ed"
  };



  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

