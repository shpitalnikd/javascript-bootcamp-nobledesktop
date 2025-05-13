/* exported capitalizeWords */

function capitalizeWords(string: string): string {
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
    words[i] = capitalized;
  }
  return words.join(' ');
}
