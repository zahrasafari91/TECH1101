# Learn this set of tools to interact with your JavaScript

## Resources:
* [How to call a function](https://www.digitalocean.com/community/tutorials/how-to-define-functions-in-javascript)
* [Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)
* [What is a return statement](https://codeburst.io/javascript-what-is-the-return-statement-97d8b11a1a0c)
* [Use Alert() or Prompt() in your code!](https://javascript.info/alert-prompt-confirm)

## Instructions:
* Open your VS Code
* Use your Live Server!
* Create an exercises-1.js file and add all the exercises into that file
* You must use Github Desktop to push your code! [More YouTube help with Github](https://www.youtube.com/playlist?list=PLylMDDjFIp1CIkQbbOg4hFiLm15WCLQE2)
* Solve the exercises and then commit and push them to your Github repo using that file

## Exercises:
* Exercise 1: Find the sum of two numbers using function parameters and return/output the result
* Exercise 2: Divide two numbers from each other using function parameters and return/output the result
* Exercise 3: Subtract 3 numbers using function parameters and return/output the result
* Exercise 4: Add two strings together using function parameters and return/output the string as a single string
* Exercise 5: Write an object for a Animal.
* Exercise 6: Create a function that asks for a name and returns the name as output
* Exercise 7: Why doesn't this work? See question below. You must solve the mystery!!

**Exercise 6:**

```JavaScript
// How old are you and your wife?
let husbandAge = prompt('How old are you?', 55);
let wifeAge = prompt('How old are you?', 45);

// Why doesn't this work? I see 5545 and it should be 100 right?
alert(husbandAge + wifeAge); // You are 100 years old!
```

**Reminder All functions must be called. Do you remember what it means? Look below for an example please.**

## Example 1:

```JavaScript
function makeName (firstName, secondName) {
  return firstName + " " + secondName
}

// Now call the above function!!
makeName('Roger', 'Kondrat') // Learned in class
makeName('Dave', 'Sugar') // Learned in class

// Function called like above, but with console.log or alert we get a visual response
console.log(makeName('Roger', 'Kondrat')) // Use this at least once
alert(makeName('Dave', 'Sugar')) // Use this at least once
```

