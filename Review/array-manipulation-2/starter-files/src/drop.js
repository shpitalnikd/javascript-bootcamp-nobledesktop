/* exported drop */
function drop(arr, count) {
  const new_arr = [];

  for (let i = count; i < arr.length; i++) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}
