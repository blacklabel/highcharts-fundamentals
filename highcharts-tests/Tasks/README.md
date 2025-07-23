# Tasks for this Classroom

## Initial

1. Test two demos in the tests directory, by opening standard HTML file.
2. Change the assertion so it will check the number of points in the series instead of the number of series.
3. Write a new test, enable dataLabels and then check if dataLabels are visible on the graph.
4. Change series color, then write a new test, checking, if series color has changed correctly.
5. Change series type, then check if the series type has changed to your new type.

## QUnit

1. Write a test that will check some parameters in Highcharts and will pass with assert.equal but fail with assert.strictEqual
2. Write a test using assert.ok and other assertion methods (the more the merrier)
3. Write a test with assertion that will break the code (throw a JS error that would break a code, like a ReferenceError), then change the Qunit test so it will pass even though it is throwing an error.
4. Write tests for other Highcharts libraries (Maps / Stock / Gantt / Choosen module)
5. Write a QUnit module containing multiple tests, then write another one and try to disable it using QUnit.module options.
6. In the previous example, add the next module with test, then make the modules nested (grandparent -> parent -> child). Check what modules will be disabled.
7. Write a couple of tests in Highcharts using TestController.

## Karma
1. Run tests through Karma for Highcharts library.
2. Write test that will fail (assertion fails), then run Karma again. Spot the difference in Karma output.
3. Create a test before the other functionality, that will break the test (throw error), then run it again. Then change it so it will assert fail instead of break the whole test. (ask for hint if needed :))
3. Change location of testing files from "tests" to "my-tests"
4. Add firefox as supported browser
5. Create callback function in example 6 from QUnit, so we will receive callbacks (beforeEach and afterEach) with info about the test we are "going to / from".
6. Change configuration so Karma will open chrome window on run
7. Change Karma configuration so it will not close after finishing last test.
8. Allow Karma to work with other Highcharts libraries (Maps / Stock / Gantt / Choosen module).

## Husky

Docs:
https://typicode.github.io/husky/#/?id=install-1

1. Add Husky to your project, using `npm install husky -D`
2. Edit package.json > prepare script and run it once:
```
npm set-script prepare "husky install"
npm run prepare
```
3. Add a hook:
```
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```
4. Make a commit
```
git commit -m "Keep calm and commit"
```

5. Check, if the Husky is working properly, then change the script so test will work on npm test-hc instead of npm test. 

6. If above works, make a commit again and check if Husky works, if not, make necessary adjustments in Husky.

# Pixelmatch

1. Add pixelmatch to your project, usign `npm install pixelmatch`
2. Create two images from the chart, moving one dataLabel couple of pixels off the second time.
3. Use pixelmatch to create an output of the difference image in test directory (You may use CLI command for this purpose).
