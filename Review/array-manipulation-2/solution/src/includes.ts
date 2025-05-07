/* exported includes */

function includes(array: unknown[], value: number): boolean {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === value) return true;
  }
  return false;
}
