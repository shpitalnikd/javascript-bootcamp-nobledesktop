'use strict';
/* exported reverse */
function reverse(array) {
  const output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    output.push(element);
  }
  return output;
}
