/* exported compact */

function compact(array: unknown[]): unknown[] {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element) output.push(element);
  }
  return output;
}
