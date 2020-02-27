console.log("running!!");

//These are your buttons!
const start = document.querySelector("#start");
const clear = document.querySelector("#clear");

//This is access to where you want to display your random number
const display = document.querySelector(".display");

// Function to generate a random number
// This function needs to take in a single parameter and that would be the highest possible number.


const num = document.querySelector("#max");

function randomNumber(num) {
  // now you have a number in your <input> what will you do with it?
  
  const randomNumber = Math.floor(Math.random()*num.value);
  return randomNumber;

}


// Start function that will call the random number function
function startFn() {
  // You have a start button and now you need to get it to do something with your
  // randomNumber input
  
  display.textContent = randomNumber(num);
}

// Stop function that will stop the start function above
function clearFn() {
  // Like the video demo you saw you need to clean up your display to show it
  // as though it's freshly reloaded.
  document.querySelector("#max").value = "";
}

// Listen for button clicks!!
// Start button
start.addEventListener("click", startFn);
// Clear Button
clear.addEventListener("click", clearFn);
