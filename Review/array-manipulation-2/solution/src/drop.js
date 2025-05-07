'use strict';
/* exported drop */
function drop(array, count) {
  const remaining = [];
  for (let i = count; i < array.length; i++) {
    const element = array[i];
    remaining.push(element);
  }
  return remaining;
}
