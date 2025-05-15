/* exported capitalize */
// hulk -> HULK

function capitalize(str) {
  const first_letter = str[0].toUpperCase();
  const rest_of_word = str.substring(1, str.length);

  const capitalize_letter_word = first_letter + rest_of_word;

  return capitalize_letter_word;
}

console.log(capitalize("hulk"));
