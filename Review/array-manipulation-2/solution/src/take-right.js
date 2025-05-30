"use strict";
/* exported takeRight */
function takeRight(array, count) {
  const taken = [];
  for (let i = Math.max(0, array.length - count); i < array.length; i++) {
    const element = array[i];
    taken.push(element);
  }
  return taken;
}

// [ 1, 2, 3]
