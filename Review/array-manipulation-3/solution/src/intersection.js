/* exported intersection */

function intersection(first, second) {
  const common = [];
  for (let i = 0; i < first.length; i++) {
    if (!common.includes(first[i]) && second.includes(first[i])) {
      common.push(first[i]);
    }
  }
  return common;
}
