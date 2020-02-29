// testing
console.log("running!!");

// get div section for creat element into it
const divAppend = document.getElementById("data");

// input for income
const input = document.getElementById("income");

// Display data here
const taxOwed = document.getElementById("taxOwed");
const effectiveTax = document.getElementById("effectiveTax");
const retained = document.getElementById("retained");

// get buttons for actions
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");

// creat Error section (element with error text)
const div = document.createElement('div');
const p = document.createElement('p');
const error = document.createTextNode('Error: Enter a number');


// function for calculate Federal tax rates
 function calculateOwed() {

   // get income from input
   const income = parseFloat(input.value);
   //  variable for function
   let owed;
   let taxString;
   let retainedIncome;

   //  33% of taxable income over $214,368 plus tax paid until this(49645)
   if (income > 214368){

     owed = ((income - 214368) * 0.33 + 49645).toFixed(2);
     retainedIncome = (income - owed).toFixed(2);
     taxString = ((owed/income) * 100).toFixed(2);
     taxOwed.textContent = "$" + owed;
     effectiveTax.textContent = taxString;
     retained.textContent = "$" + retainedIncome;
    
   }
  // 29%  of taxable income over 150473 plus tax paid until this(31115)
   else if (income > 150473){
      
     owed = ((income - 150473) * 0.29 + 31115).toFixed(2);
     retainedIncome = (income - owed).toFixed(2);
     taxString = ((owed/income) * 100).toFixed(2);
     taxOwed.textContent = "$" + owed;
     effectiveTax.textContent = taxString;
     retained.textContent = "$" + retainedIncome;
    
   }
    //  26% of taxable income over 97069 plus tax paid until this(17230)
   else if (income > 97069){

     owed = ((income - 97069) * 0.26 + 17230).toFixed(2); 
     retainedIncome = (income - owed).toFixed(2);
     taxString = ((owed/income)* 100).toFixed(2);
     taxOwed.textContent = "$" + owed;
     effectiveTax.textContent = taxString;
     retained.textContent = "$" + retainedIncome;
   
   }
  // 20.5%  of taxable income over 48535 plus tax paid until this(7280)
   else if (income > 48535){

     owed = ((income - 48535) * 0.205 + 7280).toFixed(2);
     retainedIncome = (income - owed).toFixed(2);
     taxString = ((owed/income) * 100).toFixed(2);
     taxOwed.textContent = "$" + owed;
     effectiveTax.textContent = taxString;
     retained.textContent = "$" + retainedIncome;
    
   }
    // 15% on the first $48,535 of taxable income
   else if (income <= 48535){

     owed = (income * 0.15).toFixed(2);
     retainedIncome = (income - owed).toFixed(2);
     taxString = ((owed/income) * 100).toFixed(2);
     taxOwed.textContent = "$" + owed;
     effectiveTax.textContent = taxString;
     retained.textContent = "$" + retainedIncome;
    
   }
  // determines error when an input value is NaN 
   else if (isNaN(income)){

     p.appendChild(error);
     div.appendChild(p);
     divAppend.append(div);
   }
 }

// function for clear form and data
const clearData = () => {
  // clear form
  input.value = "";
  taxOwed.textContent = "";
  effectiveTax.textContent = "";
  retained.textContent = "";
  // clear error
  p.removeChild(error);
};

// the functions called by clicking the button
submit.addEventListener("click",calculateOwed);
clear.addEventListener("click",clearData);

