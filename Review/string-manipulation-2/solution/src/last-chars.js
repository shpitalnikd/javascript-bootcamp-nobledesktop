'use strict';
/* exported lastChars */
function lastChars(length, string) {
  const startIndex = Math.max(0, string.length - length);
  return string.slice(startIndex);
}
