// testing
console.log("hello world!");

const button = document.getElementById("button");
const display = document.getElementById("display");
function fn(){
    const date =  Date();
   
    display.textContent = date;
}
button.addEventListener("click",fn);


const btnbutton = document.getElementById("btn");
const display1 = document.getElementById("display1");
function changeTxt(){
    display1.textContent = "Hello JavaScript!";
}
btnbutton.addEventListener("click",changeTxt);