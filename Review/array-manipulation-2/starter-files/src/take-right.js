/* exported takeRight */
function takeRight(arr, count) {
  const new_arr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= count) {
      break;
    }
    new_arr.push(arr[i]);
  }
  console.log(new_arr);
  return new_arr;
}
