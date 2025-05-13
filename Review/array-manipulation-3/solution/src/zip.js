/* exported zip */

function zip(first, second) {
  const maxLength = Math.min(first.length, second.length);
  const zipped = [];
  for (let i = 0; i < maxLength; i++) {
    zipped.push([first[i], second[i]]);
  }
  return zipped;
}
