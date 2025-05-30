// Lesson 03.07
// Apartment Rent Estimator

// In this form, we present the user with two select menus and two checkboxes, from which they choose their desired apartment configuration. Each choice has a  price: the more bedrooms, bathrooms and amenities chosen, the higher the rent. The choices are:

/* 
- Number of Bedrooms, chosen from a select menu.
- Number of Baths, also chosen from a select menu.
- Doorman Building checkbox
- Parking Space checkbox
- Fitness Center checkbox
- Skyline View checkbox

The html and css are already done, but of course the form doesn't work yet. We will write the JS that powers the form.

The select menus are for choosing numbers of Bedrooms and Baths. The greater the choice, the higher the value (rent).

- The 1 Bath choice has a value of 0, so choosing that will not raise the rent.

- One bedroom is pre-selected by default, even though it is not the first menu choice.

checkboxes
The fees associated with the checkboxes will, of course, only be charged if the checkbox is checked. We will first assess the flat fees and add those to the rent. Then we will calculate the percent surchargess on top of the rent.

- Parking value = 350, for the $350 parking fee
- Fitness Center (gym) value = 100, for the $100 gym fee
- Skyline View value = 0.25, for the 25% surcharge for a skyline view.
- The Doorman value = 0.1, for the 10% surcharge for a doorman building.

- The html also includes a `calculate rent()` button and an `h3` for posting the answer.

*/

// 1. Get the button and have it call a function when clicked:

// 2. Get the "feedback" tag:

// 3. Declare the function. Start with the preventDefault() method, so that the button click does not reload the page and reset the form:

// 4. Get the values of the select menus. We don't need the whole objects--just their values:

// 5. The `bdrms` and `baths` values come in as strings, so convert them to numbers. Then add them together, saving them to a var called `sum`:

// 6. Get the checkboxes:

// 7. Write if-statements to see if the checkboxex are checked and to increase the rent, accordingly:

// 8. Round off rent to an integer, and output it to the h3 tag:

// 9. Run the page in the browser.

/*
- Choose the most expensive configuration: 3 bedrooms, 2.5 baths, and check both boxes.
- Choose the cheapest configuration
- Try various other configurations.
*/

// End Lesson 03.07

// Next: Lesson 03.08
