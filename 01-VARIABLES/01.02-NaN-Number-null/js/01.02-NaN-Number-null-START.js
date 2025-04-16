// Lesson 01.02 - START

// number-like strings

// A "number-like string" is a number enclosed in quotes. So, whereas 5 is an actual number, "5" is a "number-like string".

// 1. Declare a variable with a "number-like string" for its value and try to do addition with it:

let bill = "50"; // "50" is a number-like string`
let tip = 20;
let total = bill + tip;

console.log("total", total, typeof total);

// total 5020 string

// Addition with "number-like strings" fails, as the + defaults to concatenation. But for other operations (subtraction, multiplication, division), the math is done correctly.

// subtraction

let bill_two = "50"; // "50" is a number-like string
let tip_two = 20;
let total_two = bill - tip;
console.log("total", total_two, typeof total_two);

//multiplication
let bill_three = "50"; // "50" is a number-like string
let tip_three = 20;
let total_three = bill * tip;
console.log("total", total_three, typeof total_three);

// 2.Declare a "number-like string" and do division with it:

// NaN

// NaN (Not a Number) results from trying to do math with something besides a number or a "number-like string".

// 3. Try to do math with a price with a dollar sign:

let fullPrice; // NaN number
// NaN number

// The dollar sign is not a number, so the attempt to multiply fails. The result is NaN (Not a Number).

let price = "$50"; // "$50" is not a number-like string
let tip_four = 20;
let total_four = price * tip;
console.log("total", total_four, typeof total_four);

// '$50' cannot be converted to a number, so the attempt to multiply fails.

// Number() method

// The Number() method takes a variable as its argument and, where possible, returns a number. It works with "number-like strings".

// 4. `pizzas = "4"` is a "number-like string". Convert it to a number:

let pizzas = "4"; // "4" is a number-like string
pizzas = Number(pizzas); // Number() converts "4" to a number
console.log("pizzas", pizzas + 4, typeof pizzas); // pizzas 4 number

console.log("pizzas", pizzas, typeof pizzas);
// pizzas 4 string

// pizzas 4 number// pizzas 4 string

// If a string cannot be converted to a number, `Number()` returns `NaN`.

// 5. Try to convert "banana" to a number:

let fruit;
// baNaNa NaN number

// NaN is a special value that means "not a number". It is not an error, but it does mean that the math failed. It is not a string, and it is not a number. It is its own data type. You can check for it with the `isNaN()` method.
// 5. Check if `fruit` is NaN:
console.log(isNaN(fruit)); // true

// Despite its name, `NaN` has a data type of number.

// "Number-like strings" can't be used for addition, but you can convert them with the Number() method.

// 6. Convert "15" to an actual number, so that it can be used for addition:

let num_two = "15"; // "15" is a number-like string
num_two = Number(num_two); // Number() converts "15" to a number
console.log("num", num_two + 5, typeof num_two); // num 20 number

// not defined vs undefined

// "not defined" means "variable does not exist". It is an error that usually arises from typos.

// 7. Declare a variable and then misspell it:

let island;
console.log(island, typeof island); // undefined undefined
// console.log(ixland); // error: ixland is not defined

// null

// null and undefined are both falsey (return false in a boolean context), but null is an actual value that is assigned to a variable. It has a data type of object. It’s just an empty object.

// 8. Declare a variable, set it to null, and log it:

let user;
// user null object

user = null; // null is an object
console.log(user, typeof user); // user null object

// string concatenation

// Variables and substrings can be joined together with `+` to make one bigger string. The process is known as `concatenation`:

// 9. Concatenate a substring and a variable:

let topic;
// Let's learn JavaScript!

topic = "JavaScript"; // topic is a string
console.log("Let's learn " + topic + "!"); // Let's learn JavaScript!

// 10. Concatenate a substring with two variables:

let firstName;
// Hello, class! My name is Brian McClain.

let lastName;

firstName = "Brian"; // firstName is a string
lastName = "McClain"; // lastName is a string

console.log("Hello, class! My name is " + firstName + " " + lastName + "."); // Hello, class! My name is Brian McClain.

// Concatenation is often used for making multiple, similar strings.

// 11. Concatenate an image file path with two variables and three substrings:

let car;
// images/2-door-mazda.jpg

// 12. Change the value of `car` and `doors` to get a new image path:

car; // images/4-door-chevy.jpg
let doors; // 4-door
car = "images/" + doors + "-chevy.jpg"; // car is a string
console.log(car); // images/4-door-chevy.jpg

// A plus-sign performs concatenation rather than addition if the expression includes a string.

// 13. Try to do add numbers where a dollar-sign is present. It reverts to string concatenation:

let food; // $25158

let drink; // $3.50
let tot; // $48
food = "25"; // food is a string
drink = "3.50"; // drink is a string
tot = food + drink; // tot is a string
console.log("tot", tot, typeof tot); // tot $253.50 string

// 14. Remove the dollar sign, and run it again. This time the math works. To keep the dollar sign, put it back after the math is done:

//tot; // $48

// changing a variables's data type

// Changing the datatype of a variable declared is permitted, but it should make sense to do so, as it does in the above $48 example.

// 15. Change `pet` from a string to a number. This makes no sense:
let pet; // dog
pet = "dog"; // pet is a string
console.log(pet, typeof pet); // pet dog string
pet = Number(pet); // pet is a number
console.log(pet, typeof pet); // pet NaN number

//pet;

// 16. Change a three digit number to a 4-digit "PIN" by concatenating a leading zero. This resulting value is actually a string, but the reason for changing datatype does make sense:

let num;
// 0123
num = 123; // num is a number
console.log(num, typeof num); // num 123 number
num = "0" + num; // num is a string
console.log(num, typeof num); // num 0123 string
// num 0123 string

// END Lesson 01.02
// NEXT: Lab 01.02, Lesson 01.03
