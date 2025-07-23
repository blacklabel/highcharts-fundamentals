# highcharts-tests
## Tests - Why to even bother?

**Ugh, where to even start :)**

Tests allow us to save time spent on debugging problems after they are visible in the final project.
Often, when we are creating the code, we are changing common functions, used in many places in the app. In this case,
we can introduce absolutely random bugs that we were not considering before. 

It is always better to deal with happy customer and spent couple of additional minutes on writing code, than to prepare hotfixes for many hours for the customers, that are extremely unsatisfied. 

When we all work on the same code it is harder to maintain it. More to the story, until you execute a code with a representative set of basic use cases you don’t know if that codeworks at all. And peace of mind is crucial - you don’t need to do stress tests on yourself!


## Manual vs Automated tests

We can distingush couple of different kind of tests. The most basic distinction is 

1. `Manual Tests` - tests done manually by the developer / tester. This person is going through the working application and check the functionality without using any automated tools.  The purpose of manual tests is to identify
the bugs, issues, and defects before the app is published for the end customer. It is
the most primitive technique of all testing types - but it still helps to find critical bugs in
the software application. 

2. `Automated Tests` - it is the type of testing done with using automated tools. The work done by developer is different, he is focusing on creating environment and all the testing paths for tools to follow. After creating necessary options, he can run automated tests without actual need to look at the application / code. This process is also much faster than manual testing. The risk though, is that the tests will not cover all the possible issues. Because of that, people usually mix automated tests with manual tests, to get the final certainity on the code quality.

## Test types
Based on the nature of tests, we can make another distinction:

1. `Unit Tests`
Testing of individual units (as small independent parts of code as possible) like functions or classes by supplying input and making sure the output is as expected.
`expect(fn(5)).toBe(10)`

2. `Integration Tests`
Testing Processes across several units to achieve their goals, including their side effects.

An example:

Let's say that we have an app (and a web app) that has a functionality providing the PIN codes for some devices to be opened / turned-on. Instead of testing all the scenarios (e.g. updating PIN, changing time when PIN works etc.) we may create integration tests to the SMS gate, checking if the connection works, if sending the SMS works etc. Then, all the other functional tests (like update PIN) mock module for sending SMS and test business logic only.

After unit-testing couple of functions in the app, integration testing allow us to check how they affect each other and if the final output of cooperating functions is correct.

3. `Functional Tests`
Testing how scenarios function on the product itself, by controlling the browser or the website. These tests usually ignore the internal structure of the application entirety and looks at them from the outside like on a black box.

```
Go to page "https://localhost:8080"
Type "user123" in the field *username*
Type "password123" in the field *password*
Click on *login* button
Check if Page Url is https://localhost:8080/MainProfilePage
Check if displayed user name is *user123*
```

And some other but worth mentioning:
4. `Regression Tests`
Type of testing made to confirm that a recent code change has not affected existing project.
Usually it is a full (might be partial) run of already existing test cases which are re-executed to ensure nothing was broken after our changes. New code should not have side effects on the existing functionalities.

5. `Stress/Performance Tests`
Stress: Verify the stability & reliability of the system. It checks robustness and error handling under extremely heavy conditions.

Performance: A testing to determine how the system performs in terms of responsiveness and stability under a particular workload. It might be used to investigate, and validate other quality attributes of the system, such as scalability.

# Ok, but how to run it?

Tests can run in the browser by creating an HTML page with the test libraries and tests included as JS files - So it is testing in the real browser. Some tests can also be executed in Node.js by simply importing the tests and dependent libraries - it is usually faster but the type of test is also a bit different (more of a unit-test than integration one).

## Test tools
In case of test tools, some provide with only one functionality, and other with a combination. 
Additionally, it’s common to use a combination of several tools.

1. `Test launchers` - launch your tests in the browser or Node.js with user config, using the CLI or UI (Command Line / User Interface)
2. `Testing structure providers` - help you arrange your test files. 
3. `Assertion functions` - check if the test results returns are as expected.
4. `Tools that generate and display test progress and results`. 
5. `Mocks, spies, and stubs` - isolate certain parts of tests and catch their side effects.
6. `Snapshot Testing` - when you compare a data structure to an expected one.
7. `Code coverage reports` - know how much of the code is covered by your tests. 
8. `Browser Controllers` - simulate user actions for Functional Tests. 
9. `Visual Regression Tools` - compare your site to its previous versions visually by using image comparison techniques.

**Some more words about Mocks, spies and Stubs**
Spies provide us with information about functions. For example, how many times were they called, in which cases, and by whom. Spies are used in integration tests to make sure that the side effects of a process are as expected. For example, how many times was a calculation function called during some process?

Stubbing or dubbing replaces selected methods of existing modules with user-supplied functions in order to ensure expected behavior during the test.

Mocks or Fakes are used to fake certain modules or behaviors to test different parts of a processes. Sinon can, for example, fake a server to ensure offline, fast and expected responses when testing a certain flow.

Some frameworks (Jest, Jasmine, TestCafe, Cypress) provide all of these out of the box. 
Some provide only partial functionality and a combination of libraries should be used: (mocha + chai + sinon)

Also, creating two independent different processes is a good practice. 
* unit and integration tests
* Functional Tests. 
This is because functional tests usually take longer, especially when running the test suite on several different browsers.

## What are the no-coding tools?

`Testim` - opens your app in a separate window and uses a browser extension to record manual interactions with app as test scenarios. Uses machine learning to help record and validate test scenarios. Cross-browser and has integration with many CI and Collaboration tools.

`Screener` - Lets you record tests using a Chrome extension, has in depth visual regression reporting. Has integrations with CI tools, BrowserStack, Sauce Labs.

`PixelMatch` - The smallest, simplest and fastest JavaScript pixel-level image comparison library, originally created to compare screenshots in tests.

# So what do we use in Highcharts?

1. `QUnit` - is a powerful, easy-to-use JavaScript unit testing framework. It's used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code.
*With added Lolex and TestController scripts
2. `Karma` - test-runner, for running tests in the CLI
3. `Husky` - for starting it all on commit
4. `PixelMatch` - with GifEncoder in CircleCI (https://github.com/highcharts/highcharts/pull/12201)

