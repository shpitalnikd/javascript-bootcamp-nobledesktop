/* exported swapChars */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  let swapped = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapped += string[secondIndex];
    } else if (i === secondIndex) {
      swapped += string[firstIndex];
    } else {
      swapped += string[i];
    }
  }
  return swapped;
}
