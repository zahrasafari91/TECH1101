console.log("testing");

function getDate(){
    const date = document.querySelector("#year");
    // console.log(date); good for problem solving
    const currentYear = new Date().getFullYear();
    // console.log(currentYear);
    date.textContent= currentYear
   
}
getDate();
console.log(date);