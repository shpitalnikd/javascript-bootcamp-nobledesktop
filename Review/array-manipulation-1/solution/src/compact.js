'use strict';
/* exported compact */
function compact(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element) output.push(element);
  }
  return output;
}
