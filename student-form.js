import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 
import { db } from "./config.js"


const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const city = document.querySelector("#city");
const course = document.querySelector("#course");
const number = document.querySelector("#number");
const cont = document.querySelector("#cont");
let arr =[]


form.addEventListener("submit" , async(event)=>{
event.preventDefault();

const userData={
    // profileImg:profileImg,
    username:userName.value,
    city:city.value,
    course:course.value,
    number:number.value
}

try {
    const docRef = await addDoc(collection(db, "users"),userData);
    arr.push(userData);
    console.log("Document written with ID: ", docRef.id);

arr.map((item)=>{
    cont.innerHTML = `
                  <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-primary ">
                  <div class="mt-4">
                    <h1 class="text-black tracking-widest title-font fs-2 mb-1">Name: ${item.username}</h1>
                    <h2 class="text-black title-font text-lg font-medium">City: ${item.city}</h2>
                    <h2 class="mt-1 text-black title-font text-lg font-medium">Course Name: ${item.course}</h2>
                    <h2 class="mt-1 text-black title-font text-lg font-medium">Phone no: ${item.number}</h2>
                  </div>
                </div>
    `
})
    

  } catch (e) {
    console.error("Error adding document: ", e);
  }
})




