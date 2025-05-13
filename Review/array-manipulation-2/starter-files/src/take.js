function take(arr, count) {
  if (arr.length === 0) {
    return [];
  }

  const new_arr = [];

  for (let i = 0; i < count; i++) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}
