// in javascript we are learning how to program
// just like in math class and english we have to learn them in steps
// the first step was to learn your ABC and your 123
// learn how to create conditions

let x = 12;
const condition = 3 / 3 === 4;

/*
 1. if / else conditional logic
       
    if( EXPRESS ) <--- expression gets evaluted to either a TRUE or FALSE{
        if that condition was true it   
        will come inside this curly brace and exicute any code inside
        const b = x + 2
    
    } else <----- if expression is false we enter the else statement code block
     { 

     }


 2. Switch case Statement

 3. Turanry Statement


      (condition) ? [ True section ] : [ False Conditon]



*/

// 95 % -->> 70

if (condition) {
  console.log(" Condition is True");
} else if (12 / 1 === x) {
  console.log(" This is my third condition");
} else {
  console.log(" Condition is False");
}

let ans;
// 4 % -->> 24%
// Turanry Statement
//                condition    ? [ True Section] : [ False Section]
const statement = 11 % 2 === 0 ? (ans = true) : (ans = false);

console.log(ans);

// switch case statement is a bit more complicated than they other options because it has
// 1%
// some configuration to it
const option = "Yellow";
switch (option) {
  case "Red":
    console.log("Strawberries");
    break;
  case "Blue":
    console.log("Blue Berries");
    break;
  case "Yellow":
    console.log("Banana");
    break;

  default:
    console.log("No valid options");
}
