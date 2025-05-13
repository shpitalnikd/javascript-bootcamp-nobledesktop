/* exported union */

function union(first, second) {
  const combined = [];
  for (let i = 0; i < first.length; i++) {
    if (!combined.includes(first[i])) {
      combined.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!combined.includes(second[j])) {
      combined.push(second[j]);
    }
  }
  return combined;
}
