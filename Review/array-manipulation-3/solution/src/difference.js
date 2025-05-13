/* exported difference */

function difference(first, second) {
  const different = [];
  for (let i = 0; i < first.length; i++) {
    if (!different.includes(first[i]) && !second.includes(first[i])) {
      different.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!different.includes(second[j]) && !first.includes(second[j])) {
      different.push(second[j]);
    }
  }
  return different;
}
