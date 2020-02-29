// Exercise 1;
function sum(num1,num2){
    return num1 + num2;
};
console.log("result of sum is:",sum(15,5))


// Exercise 2
const Division = (x,y) => {
    return x / y;
};
Division(200,2);

// Exercise 3
const Subtract = function(a,b,c){
    return (a-b)-c;
}
console.log("result of subtract is" ,Subtract(20,4,9))


// Exercise 4
function addString(s1,s2){
    return s1 + " " + s2;
};
console.log(addString("Hello","World!"))


// Exercise 5
const obj = {
    name : "Horse",
    type : "Mammalia",
    breed : "knabstrupper",
    lifespan : 25,
    speed : 88,
};


// Exercise 6
let userName = prompt("What is your name?"," ")
alert(`Your name is: ${userName}`);

// // Exercise 7
// // How old are you and your wife?
// let husbandAge = prompt('How old are you?', 55);
// let wifeAge = prompt('How old are you?', 45);

// // Why doesn't this work? I see 5545 and it should be 100 right?
// alert(husbandAge + wifeAge); // You are 100 years old!

// Because the function prompt returns a string and will not add numbers 

let husbandAge = Number(prompt('How old are you?', 55));
let wifeAge = Number(prompt('How old are you?', 45));
alert(husbandAge +wifeAge);

//The Number() function converts the object argument to a number 
