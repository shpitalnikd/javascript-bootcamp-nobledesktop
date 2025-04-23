const student_1 = "Martha";

const student_2 = "David";

const student_3 = "Rebekah";

const student_4 = "Carmen";

//onsole.log("Hello World", student_1, studnet_2, student_3, student_4);

// ctrl + s = save file

//1 A "number-like string" is a number enclosed in quotes. So, whereas 5 is an actual number, "5" is a "number-like string".

let bill = 500;
let tip = "20";
// "50020" <- not a number but its a string
// is javascript instead of adding if its both numbers
// it sees that it is a string plus another type so it concats them together.
const add = bill + tip;

// console.log(add);
// console.log(typeof add);

// Declare a number-like string and do division with it:

let coins = "4";
let children = 8;
let allowance = coins / children;

// console.log(allowance);

/**
 NaN (Not a Number) results from trying to do math with something that is neither a number nor a number-like string.

Try to do math with a price that includes a dollar sign:
 
 */

const money_in_left_pocket = "$1.50";

const money_in_my_wallet = 20;

const amount = money_in_left_pocket * money_in_my_wallet;

//console.log(amount);

// Number() < --- Number function (machine) performs something / a process ( Air fryer , Blender , Mircowave, Dishwasher, Dryer, Air Conditioner )

function Blender(fruit, water, sweenter) {
  return fruit + water + sweenter;
}

//console.log(Blender("strawberry", "h20", "Honey"));

// console.log(Math.pow(7, 3));
const one = Math.ceil(0.9);
// console.log(one + Math.pow(7, 3));

console.log(Math.floor(Math.random() * 1500));

const str1 = "Hi I am a String";
const str2 = "I am a string as well";
// back tic are a bit different
const port = 8080;
const str3 = `Hey I am running on Port:${port}`;

console.log(str3);
let petName = "Fluffy";
let age = 3;
let food = "tuna";
let catGreeting = `Meow! My name is ${petName}. I am ${age} years old. My favorite food is ${food}`;

console.log(catGreeting);
// Meow! My name is Fluffy! I am 3 years old. My favorite food is tuna.

console.log(4 % 2);
console.log(5 % 3);
// condition

const num = 6;

if (num % 2 === 1) {
  // go inside these curl braces
  console.log("Not Even");
} else {
  console.log("Not Odd");
  // go here is condition is false
}
