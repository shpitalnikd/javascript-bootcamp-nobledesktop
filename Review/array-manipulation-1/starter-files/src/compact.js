/* exported compact */
function compact(arr) {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      continue;
    }
    new_arr.push(arr[i]);
  }
  return new_arr;
}
