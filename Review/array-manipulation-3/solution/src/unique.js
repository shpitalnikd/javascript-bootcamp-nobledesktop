/* exported unique */

function unique(array) {
  const deduplicated = [];
  for (let i = 0; i < array.length; i++) {
    if (!deduplicated.includes(array[i])) {
      deduplicated.push(array[i]);
    }
  }
  return deduplicated;
}
