# array-manipulation-1

JavaScript array manipulation practice with unit tests.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Exercise

For this exercise you will be implementing several generic array manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty TypeScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Change directories into `array-manipulation-1`. Use the TypeScript compiler to watch changes in your TypeScript file and compile it to JavaScript. This will compile your TypeScript into JavaScript and watch for any changes you make in your TypeScript file.

```sh
cd array-manipulation-1/src
npx tsc --watch
```

Since all of these functions will be getting passed in arrays of various different data types, you will need to utilize the [`unknown`](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown) type to correctly type the parameters.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

<p align="middle">
  <img src="assets/failing-tests.png" alt="failing-tests">
</p>

Open `src/head.ts` and `src/head.test.js` in your code editor and skim the code in `head.test.js`. As you add to or modify `head.ts`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

<p align="middle">
  <img src="assets/passing-tests.png" alt="passing-tests">
</p>

1. ### `head(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `head`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   The first element of `array`.

   #### Examples

   ```js
   head(['foo', 'bar', 'baz']); // -> "foo"
   head([1, 2, 3, 4, 5]); // -> 1
   head([false, true, false, true]); // -> false
   head([]); // -> undefined
   ```

1. ### `last(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `last`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   The last element of `array`.

   #### Examples

   ```js
   last(['foo', 'bar', 'baz']); // -> "baz"
   last([1, 2, 3, 4, 5]); // -> 5
   last([false, true, false, true]); // -> true
   last([]); // -> undefined
   ```

1. ### `tail(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `tail`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   A new array containing all elements of `array` after the first.

   #### Examples

   ```js
   tail(['foo', 'bar', 'baz']); // -> ["bar", "baz"]
   tail([1, 2, 3, 4, 5, 6]); // -> [2, 3, 4, 5, 6]
   tail([true, false, false, true]); // -> [false, false, true]
   tail([]); // -> []
   ```

1. ### `initial(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `initial`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   A new array containing all elements of `array` except the last.

   #### Examples

   ```js
   initial(['foo', 'bar', 'baz']); // -> ["foo", "bar"]
   initial([1, 2, 3, 4, 5, 6]); // -> [1, 2, 3, 4, 5]
   initial([true, false, false, true]); // -> [true, false, false]
   initial([]); // -> []
   ```

1. ### `reverse(array)`

   **Do not use `Array.prototype.reverse()` in your implementation of `reverse`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   A new array containing all elements of `array` in reverse order.

   #### Examples

   ```js
   reverse(['foo', 'bar', 'baz']); // -> ["baz", "bar", "foo"]
   reverse([1, 2, 3, 4, 5]); // -> [5, 4, 3, 2, 1]
   reverse([false, true, false, true]); // -> [true, false, true, false]
   reverse([]); // -> []
   ```

1. ### `compact(array)`

   **For this function, you'll need to read the tests defined in `src/compact.test.js` to figure out the solution.**


