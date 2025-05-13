/* exported getWords */

function getWords(string: string): string[] {
  const words = [];
  let lastWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      lastWord += string[i];
      continue;
    }
    if (lastWord.length > 0) {
      words.push(lastWord);
      lastWord = '';
    }
  }
  if (lastWord.length > 0) {
    words.push(lastWord);
  }
  return words;
}
