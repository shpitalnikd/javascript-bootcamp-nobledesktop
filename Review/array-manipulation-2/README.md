# array-manipulation-2

JavaScript array manipulation practice with unit tests.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Exercise

For this exercise you will be implementing several generic array manipulation functions. You are given a description of each function, a suite of unit tests for each function, and an empty TypeScript file in which to write your implementation.

Your goal is to define each function according to its description, such that all of its tests pass.

Change directories into `array-manipulation-2`. Use the TypeScript compiler to watch changes in your TypeScript file and compile it to JavaScript. This will compile your TypeScript into JavaScript and watch for any changes you make in your TypeScript file.

```sh
cd array-manipulation-2/src
npx tsc --watch
```

Since all of these functions will be getting passed in arrays of various different data types, you will need to utilize the [`unknown`](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown) type to correctly type the parameters.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.

<p align="middle">
  <img src="assets/failing-tests.png" alt="failing-tests">
</p>

Open `src/take.ts` and `src/take.test.js` in your code editor and skim the code in `take.test.js`. As you add to or modify `take.ts`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

<p align="middle">
  <img src="assets/passing-tests.png" alt="passing-tests">
</p>

1. ### `take(array, count)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `count` - A positive integer `number` of elements to "take" from the beginning of `array`

   #### Return Value

   A new `Array` containing the first `count` elements of `array`.

   #### Examples

   ```js
   take(['foo', 'bar', 'baz', 'qux'], 2);
   // -> ["foo", "bar"]
   take([1, 2, 3, 4, 5], 1);
   // -> [1]
   take([false, true, false, true], 3);
   // -> [false, true, false]
   take([], 7);
   // -> []
   ```

1. ### `drop(array, count)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `count` - A positive integer `number` of elements to "drop" from the beginning of `array`

   #### Return Value

   A new `Array` containing the elements of `array` after the first `count` elements.

   #### Examples

   ```js
   drop(['foo', 'bar', 'baz', 'qux'], 2);
   // -> ["baz", "qux"]
   drop([1, 2, 3, 4, 5], 1);
   // -> [2, 3, 4, 5]
   drop([false, true, false, true], 3);
   // -> [true]
   drop([], 7);
   // -> []
   drop(['chicken', 'waffle', 'syrup', 'cheese'], 5);
   // -> []
   ```

1. ### `includes(array, value)` 🚨

   🚨 **Do not use `Array.prototype.includes` in your implementation.** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `value` - The value to search for in `array`

   #### Return Value

   A `Boolean` indicating the presence of `value` at any index of `array`.

   #### Examples

   ```js
   includes(['foo', 'bar', 'baz', 'qux'], 'baz');
   // -> true
   includes(['foo', 'bar', 'baz', 'qux'], 'corge');
   // -> false
   includes([1, 2, 3, 4, 5], 2);
   // -> true
   includes([1, 2, 3, 4, 5], 7);
   // -> false
   includes([false, true, false, true], false);
   // -> true
   includes([false, true, false, true], null);
   // -> false
   includes([], true);
   // -> false
   includes([], 'foo');
   // -> false
   includes([], 7);
   // -> false
   ```

1. ### `takeRight(array, count)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `count` - A positive integer `number` of elements to "take" from the end of `array`.

   #### Return Value

   A new `Array` containing the last `count` elements of `array`. If the `count` is larger than the length of the array, then a shallow copy of the entire array is returned.

   #### Examples

   ```js
   takeRight(['foo', 'bar', 'baz', 'qux'], 2);
   // -> ["baz", "qux"]
   takeRight([1, 2, 3, 4, 5], 1);
   // -> [5]
   takeRight([false, true, false, true], 3);
   // -> [true, false, true]
   takeRight([], 7);
   // -> []
   takeRight([4, 5, 6, 7], 5);
   // -> [4, 5, 6, 7]
   ```

1. ### `dropRight(array, count)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `count` - A positive integer `number` of elements to "drop" from the end of `array`.

   #### Return Value

   A new `Array` containing the elements of `array` before the last `count` elements.

   #### Examples

   ```js
   dropRight(['foo', 'bar', 'baz', 'qux'], 2);
   // -> ["foo", "bar"]
   dropRight([1, 2, 3, 4, 5], 1);
   // -> [1, 2, 3, 4]
   dropRight([false, true, false, true], 3);
   // -> [false]
   dropRight([], 7);
   // -> []
   dropRight(['chicken', 'waffle', 'syrup', 'cheese'], 5);
   // -> []
   ```

1. ### `chunk(array, size)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `size` - A positive integer `number` indicating the desired "chunk" size.

   #### Return Value

   A new `Array` of `Arrays`. Each sub-`Array` has a length equal to `size`. Remaining elements are gathered into a final sub-`Array`.

   #### OPTIONAL CHALLENGE (optional: don't do it this way if it takes a long time to solve)

   **Do not use `Array.prototype.slice` in your implementation.**

   #### Examples

   ```js
   chunk(['foo', 'bar', 'baz', 'qux'], 2);
   // -> [["foo", "bar"], ["baz", "qux"]]
   chunk([1, 2, 3, 4, 5], 1);
   // -> [[1], [2], [3], [4], [5]]
   chunk([false, true, false, true], 3);
   // -> [[false, true, false], [true]]
   chunk([], 7);
   // -> []
   ```


