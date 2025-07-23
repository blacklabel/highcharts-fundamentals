# QUnit

**Directly from the QUnit documentation:**

https://qunitjs.com/intro/

QUnit is a powerful, easy-to-use JavaScript testing framework. It was originally developed for the jQuery project and has since evolved to be a dependency of many modern JavaScript libraries and applications, including being the default testing framework for the Ember.js ecosystem.

## Philosophy
QUnit’s philosophy as a test framework boils down to three primary tenants: Easy, Universal, and Extensible.

**Easy**
QUnit should be easy-to-use from start to finish. Setting up your first test with should be super simple, requiring as little overhead as possible. Then, as you’re developing, when a test or assertion fails, QUnit should provide feedback to you as fast as possible, with enough detail to quickly figure out the underlying issue. And it should do so without interrupting or corrupting other tests.

Additionally, QUnit should be fast to make it easy for developers to have confidence that putting their tests on their critical path won’t slow them down.

**Univeral**
QUnit should be universally applicable for testing JavaScript code and support many different environments. JavaScript can run in the browser, in worker threads, and on the server, and so should QUnit so that you can test your code in the same environment where it will be running; the environment where you need to have confidence it works.

**Extensible**
QUnit should be opinionated with a lean API to support being easy-to-use, yet highly extensible. There are many different approaches to testing and many different types of tests that users may want to write, and while we can not support all of these out of the box, we can support APIs to enable the community to extend QUnit to meet their needs.

# So let's go to testing

The basic example of testing with QUnit would be someting like:

```
const add = function(a, b) {
    return a + b;
};

QUnit.module('add');

QUnit.test('two numbers', assert => {
  assert.equal(add(1, 2), 3);
});
```

As you can see, QUnit is using assert functions for checking if test results returns are as expected. QUnit has it's own API,
from where we generally use `assert.ok`, `assert.equal`, `assert.strictEqual`, `assert.notEqual` and similar. Some explanation below:


`assert.ok(arg, msg)` - A boolean check that passes when the first argument is truthy.

example from API page:

```
QUnit.test('example', assert => {
  // success
  assert.ok(true, 'boolean true');
  assert.ok('foo', 'non-empty string');
  assert.ok(1, 'number one');

  // failure
  assert.ok(false, 'boolean false');
  assert.ok('', 'empty string');
  assert.ok(0, 'number zero');
  assert.ok(NaN, 'NaN value');
  assert.ok(null, 'null value');
  assert.ok(undefined, 'undefined value');
});
```

`assert.equal(actual, expected, msg)` - A non-strict comparison of two values, taking two values to compare and a message.

example from API page:
```
QUnit.test('equal test', function (assert) {
  assert.equal(0, 0, 'Zero, Zero; equal succeeds');
  assert.equal('', 0, 'Empty, Zero; equal succeeds');
  assert.equal('', '', 'Empty, Empty; equal succeeds');

  assert.equal('three', 3, 'Three, 3; equal fails');
  assert.equal(null, false, 'null, false; equal fails');
});
```

`assert.strictEqual(actual, expected, msg)` - A strict type and value comparison. The strictEqual() assertion provides the most rigid comparison of type and value with the strict equality operator (===).

Other explanations and assertions might be found on QUnit API:
https://api.qunitjs.com/assert/

# QUnit Module

- again from the docs :)

QUnit Module allow us to group related tests under a common label. All tests inside a module will be grouped under that module. Tests can be added to a module using the `QUnit.test` method. Modules help organize, select, and filter tests to run.

Modules can be nested inside other modules. In the output, tests are generally prefixed by the names of all parent modules. E.g. “Grantparent > Parent > Child > my test”.

The `QUnit.module.only()`, `QUnit.module.skip()`, and `QUnit.module.todo()` methods are aliases for `QUnit.module()` that apply the behaviour of 

`QUnit.test.only()` - Use this method to focus your test suite on specific tests. QUnit.test.only will cause any other tests in your suite to be ignored.

`QUnit.test.skip()` - Use this method to disable a QUnit.test(), as alternative to commenting out the test.

`QUnit.test.todo()` - Use this method to test a unit of code that is still under development (in a “todo” state). The “todo” test will pass as long as there is at least one assertion still failing, or if an exception is thrown.

to all a module’s tests at once. 

Additionally, test has one more method:
`QUnit.test.each()` - Use this method to add multiple tests that are similar, but with different data passed in.

example:

```
function isEven (x) {
  return x % 2 === 0;
}

QUnit.test.each('isEven()', [2, 4, 6], (assert, data) => {
  assert.true(isEven(data), `${data} is even`);
});
```

## QUnit Module Hooks
You can use hooks to prepare fixtures, or run other setup and teardown logic. Hooks can run around individual tests, or around a whole module.

1. before: Run a callback before the first test.
2. beforeEach: Run a callback before each test.
3. afterEach: Run a callback after each test.
4. after: Run a callback after the last test.

You can add hooks via the hooks parameter of a scoped module, or in the module options object, or globally for all tests via QUnit.hooks.

Hooks that are added to a module, will also apply to tests in any nested modules.

Hooks that run before a test, are ordered from outer-most to inner-most, in the order that they are added. This means that a test will first run any global beforeEach hooks, then the hooks of parent modules, and finally the hooks added to the immediate module the test is a part of. Hooks that run after a test, are ordered from inner-most to outer-most, in the reverse order. In other words, before and beforeEach callbacks form a queue, while afterEach and after form a stack.

More info in the https://api.qunitjs.com/QUnit/module/#hooks
