# So what is Karma?
Really nice description in here: https://www.testim.io/blog/karma-js-testing-what-why-and-how-to-get-going-right-now/


- On the AngularJS team, we rely on testing and we always seek better tools to make our life easier. That's why we created
Karma - a test runner that fits all our needs.

## Some description
Karma is a test runner - what that means is that it allows to run tests against real browsers and other devices. As different browsers often work differently, to be fully certain about the quality of our product we should run test against as many machines as possible. And Karma gives us a possibility to do that fast and easy. 

Karma also makes it easy for developers to continuously run their tests without leaving their terminal or IDEs since it can re-run the tests every time the files change.

You may use npm or yarn to install Karma. 

The most important file for karma is it's `karma.conf.js` configuration file. It contains whole options, like used plugins, loaded files, supported browsers etc.