# highcharts-events

This training is created for getting familiar with the Highcharts' Events. During this course, you will work with event-related methods from Highcharts library. All the excercises are grouped in the separate folders, containing plain js and html files, with task description.

# highcharts

Highcharts JS is a JavaScript charting library based on SVG, with fallbacks to VML and canvas for old browsers.

* Official website: [www.highcharts.com](http://www.highcharts.com)
* Download page: [www.highcharts.com/download](http://www.highcharts.com/download)

# read first:

Events API:
* [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
* [`dispatchEvent()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent) + [`new Event()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)

HC Events API:
* [`Highcharts.addEvent()`](https://api.highcharts.com/class-reference/Highcharts#.addEvent%3CT%3E)
* [`Highcharts.fireEvent()`](https://api.highcharts.com/class-reference/Highcharts#.fireEvent%3CT%3E)
* [`Highcharts.removeEvent()`](https://api.highcharts.com/class-reference/Highcharts#.removeEvent%3CT%3E)
* [Pub/Sub pattern](https://dev.to/anishkumar/design-patterns-in-javascript-publish-subscribe-or-pubsub-20gf)

HC Chart's events API:
* [`chart.events.load`](https://api.highcharts.com/highcharts/chart.events.load)
* [`chart.events.render`](https://api.highcharts.com/highcharts/chart.events.render)
* [`chart.events.redraw`](https://api.highcharts.com/highcharts/chart.events.redraw)

# process
Whenever some task is ready, on the separate branch prepare a PR with working demo, so the code might be reviewed by trainer.
