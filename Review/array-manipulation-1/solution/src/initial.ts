/* exported initial */

function initial(array: unknown[]): unknown[] {
  const output = [];
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    output.push(element);
  }
  return output;
}
