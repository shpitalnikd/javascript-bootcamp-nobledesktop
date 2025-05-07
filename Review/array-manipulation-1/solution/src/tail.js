'use strict';
/* exported tail */
function tail(array) {
  const output = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    output.push(element);
  }
  return output;
}
