'use strict';
/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === value) return true;
  }
  return false;
}
