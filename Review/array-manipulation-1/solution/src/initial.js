'use strict';
/* exported initial */
function initial(array) {
  const output = [];
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    output.push(element);
  }
  return output;
}
