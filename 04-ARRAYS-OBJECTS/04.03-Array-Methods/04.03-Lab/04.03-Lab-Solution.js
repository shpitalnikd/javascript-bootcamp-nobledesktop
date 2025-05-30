// 04.03 Lab Exercises - SOLUTION
// array methods

// console.log each step to verify the result.

// 1. Make a pets array containing 'cat', 'dog' and 'hamster'.
const pets = ["cat", "dog", "hamster"];
console.log("pets:", pets); // ['cat', 'dog', 'hamster']

// array.push() adds item to end of array:

// 2. Push 'iguana' into the array.
pets.push("iguana");
console.log("pets:", pets); // ['cat', 'dog', 'hamster', 'iguana']

// 3. Push 'parrot' into the array.
pets.push("parrot");
console.log("pets:", pets); // ['cat', 'dog', 'hamster', 'iguana', 'parrot']

// 4. Push 'snake' into the array.
pets.push("snake");
console.log("pets:", pets); // ['cat', 'dog', 'hamster', 'iguana', 'parrot', 'snake']

// array.pop() removes item from end of array:

// 5. remove (pop) the last item, which is 'snake'
pets.pop(); // remove last item, which is the snake
console.log("pets:", pets);
pets.push("snake");

// 6. put (push) back 'snake'
console.log("pets:", pets); // ['cat', 'dog', 'hamster', 'iguana', 'parrot', 'snake']
var poppedPet = pets.pop();

// 7. pop it again, BUT this time save the return value
console.log("pets:", pets); // ['cat', 'dog', 'hamster', 'iguana', 'parrot']
console.log("poppedPet:", poppedPet); // snake

// array.unshift() adds item to beginning of array:
// 8. Add 'bunny' to the beginning of pets array
pets.unshift("bunny");
console.log("pets:", pets);
// ['bunny', 'cat', 'dog', 'hamster', 'iguana', 'parrot']

// array.shift() method removes first item of array
// 9. Remove 'bunny'
pets.shift();
console.log("pets:", pets); // ['cat', 'dog', 'hamster', 'iguana', 'parrot']

// array1.concat(array2) combines 2 or more arrays
// 10. Combine pets and morePets into the petsGalore array
const morePets = ["canary", "gerbil", "kitten", "python", "turtle"];
const petsGalore = pets.concat(morePets); // combine pets and morePets into new array, petsGalore
console.log("pets:", pets);
console.log("morePets:", morePets);
console.log("petsGalore:", petsGalore);
// ['cat', 'dog', 'hamster', 'iguana', 'parrot', 'canary', 'gerbil', 'kitten', 'python', 'turtle']

// array.sort() from A-Z
// 11. Sort the petsGalore array:
petsGalore.sort();
console.log("petsGalore sorted:", petsGalore);
// ['canary', 'cat', 'dog', 'gerbil', 'hamster', 'iguana', 'kitten', 'parrot', 'python', 'turtle']

// array.splice(index, count)
// 12. get rid of the first two items but save them to a var called twoSplicedPets
var twoSplicedPets = petsGalore.splice(0, 2);
console.log("twoSplicedPets:", twoSplicedPets);
// ['canary', 'cat']
console.log("petsGalore spliced:", petsGalore);
// ['dog', 'gerbil', 'hamster', 'iguana', 'kitten', 'parrot', 'python', 'turtle']

// 13. starting at the 4th item in petsGalore, splice 3 items in a row; save the items as threeSplicedPets
// console log threeSplicedPets and petsGalore; refer to above example for step-by-step how-to
var threeSplicedPets = petsGalore.splice(3, 3);
//(3, 3) start index, number of items to remove
console.log("threeSplicedPets:", threeSplicedPets);
// ['iguana', 'kiten', 'parrot']
console.log("petsGalore spliced:", petsGalore); // ['dog', 'gerbil', 'hamster', 'python', 'turtle']

// 14. Using concat(), restore petsGalore to its original state of 10 pets and sort it from A-Z
const petsGaloreRestored = petsGalore
  .concat(twoSplicedPets, threeSplicedPets)
  .sort();
console.log("petsGalore restored:", petsGaloreRestored);

// 15. Make a string connected by & of all items
let petsStr = petsGalore.join(" & "); // array.join() is called on an array and returns a string of all items
console.log("petsStr:", petsStr);

// NEXT: Lesson 04.04
