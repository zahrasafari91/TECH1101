console.log("hello and testing!");

const fname = document.querySelector("#firstName");
const submit = document.querySelector("#submit");
const show = document.querySelector("#show");

function fn(){
    show.textContent = fname.value;
}
submit.addEventListener("click",fn);


const lname = document.querySelector("#lastName");
const submit2 = document.querySelector("#submit2");
const show2 = document.querySelector("#show2");

function f(){
    show2.textContent = lname.value;
}
submit2.addEventListener("click",f);