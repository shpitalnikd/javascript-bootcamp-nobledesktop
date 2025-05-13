/* exported initial */
function initial(arr) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      break;
    }
    new_arr.push(arr[i]);
  }
  return new_arr;
}
