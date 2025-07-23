var div;
if (!document.getElementById('container')) {
    div = document.createElement('div');
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
}
if (!document.getElementById('output')) {
    div = document.createElement('div');
    div.setAttribute('id', 'output');
    document.body.appendChild(div);
}
var demoHTML = document.createElement('div');
demoHTML.setAttribute('id', 'demo-html');
document.body.appendChild(demoHTML);


var currentTests = [];

// Handle wrapping, reset functions that are wrapped in the visual samples to
// prevent the wraps from piling up downstream.
var wrappedFunctions = [];
var addedEvents = [];

if (window.QUnit) {
    // Fix the number localization in IE
    if (
        /msie/.test(navigator.userAgent) &&
        !Number.prototype._toString
    ) {
        Number.prototype._toString = Number.prototype.toString;
        Number.prototype.toString = function(radix) {
            if (radix) {
                return Number.prototype._toString.apply(this, arguments);
            } else {
                return this.toLocaleString('en', { useGrouping: false, maximumFractionDigits: 20 });
            }
        }
    }

    QUnit.module('[Highcharts Tests]', {
        beforeEach: function (test) {
            if (VERBOSE) {
                console.log('Start "' + test.test.testName + '"');
            }
            currentTests.push(test.test.testName);

            // Reset container size that some tests may have modified
            var containerStyle = document.getElementById('container').style;
            containerStyle.width = 'auto';
            containerStyle.height = 'auto';
            containerStyle.position = 'absolute';
            containerStyle.left = '8';
            containerStyle.top = '8';
            containerStyle.zIndex = '9999';

            // Reset randomizer
            Math.randomCursor = 0;
        },

        afterEach: function (test) {
            if (VERBOSE) {
                console.log('- end "' + test.test.testName + '"');
            }
            currentTests.splice(
                currentTests.indexOf(test.test.testName),
                1
            );

            var container = document.getElementById('container');
            container.innerHTML = '';

            var containerStyle = container.style;
            containerStyle.width = '';
            containerStyle.height = '';
            containerStyle.position = '';
            containerStyle.left = '';
            containerStyle.top = '';
            containerStyle.zIndex = '';
        }
    });
}