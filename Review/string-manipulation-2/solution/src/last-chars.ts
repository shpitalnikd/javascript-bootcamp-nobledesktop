/* exported lastChars */

function lastChars(length: number, string: string): string {
  const startIndex = Math.max(0, string.length - length);
  return string.slice(startIndex);
}
