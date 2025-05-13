'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let ransom = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      ransom += string[i].toUpperCase();
    } else {
      ransom += string[i].toLowerCase();
    }
  }
  return ransom;
}
