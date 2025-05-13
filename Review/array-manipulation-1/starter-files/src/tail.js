/* exported tail */
function tail(arr) {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      continue;
    }
    new_arr.push(arr[i]);
  }
  return new_arr;
}
