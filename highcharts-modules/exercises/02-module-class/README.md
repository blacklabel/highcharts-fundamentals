# Exercise 02

1) Create module:

In `color-generator-2.0.mjs` file create a module which allows creating a [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) generating colors, following the rules:
  - when a color is requested, then next available color is returned
  - when multiple colors are requested, a subset of built-in colors is returned, starting from the first color
  - requesting multiple colors doesn't reset iterator of colors
  - when reaching last color, and requesting the next color, the iterator starts from the first color

Example:

Available colors: red, green, blue

```ts
const colorsGenerator = new ColorGenerator();
colorsGenerator.get(); // returns ['red']
colorsGenerator.get(); // returns ['green']
colorsGenerator.get(); // returns ['blue']
colorsGenerator.get(); // returns ['red']
colorsGenerator.get(2); // returns ['red', 'green']
colorsGenerator.get(); // returns ['green']
colorsGenerator.reset();
colorsGenerator.get(1); // returns ['red']
colorsGenerator.get(1); // returns ['green']
colorsGenerator.get(123123123); // returns all available colors
```

Note:
`get()` and `get(1)` are equivalent

Implement a [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) with:

a) Public methods:
  - `get(n?: number): Array<string>`;
  - `reset(): void`;

b) Private properties and methods:
  - `colors: Array<string>`
  - any other properties and methods you need

Export Class only. Use **default export**.

2) Import module

Import module in `test.js` and test it. For example

```ts
function expect(value) {
  return {
    toBe: (expected) => value === expected
  }
};

console.log(
  expect(colorsGenerator.get().length)
    .toBe(1) // should be true in console
);

console.log(
  expect(colorsGenerator.get()[0])
    .toBe('green') // should be true in console
);
...
```