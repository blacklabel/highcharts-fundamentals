# exercise 17
Using the [data module](https://api.highcharts.com/highcharts/data), load the data in the csv format.

Then, using correct callback functions in the API, parse the options/data to adjust the chart, to resemble the one in the gif.

Here are some general requirements:
- There should be 2 series visible on seperate yAxes.
- the `line` chart should show the temperature chart.
- The `columnrange` series should show the time period, between which the rain occured in a given day.
The values in the tooltip and labels on the yAxis should be displayed in a format HH:MM e.g. 18:34.
- Using SVGRenderer add a button, which will be responsible for changing the Temperature Unit between fahrenheit and celsius. This would make the line series to display a different values.

Here is an example: ![TUTAJ DOBRY GIF](url)