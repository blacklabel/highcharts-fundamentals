# Maps Exercise 3 - Dynamic Drilldown

This task is to create a script that generates a dynamic map drilldown representation, akin to the one presented in the gif above.
In the `main.js` file, you can find fetched topology and sample data in the form of the `chartData` array.
The specific requirements are:

1. Adding the `mappoint` Series
   - For a basic world view, add a `mappoint` series consistent with the sample presentation.
   - Use the symbol type 'mapmarker'.
   - Documentation: [Mappoint Series](https://www.highcharts.com/docs/maps/mappoint-series)
2. Implement Drilldown
   - On clicking a continent, a detailed map of the countries within that continent should be displayed (e.g., Europe, America).
   - Example: [Map Drilldown in Highcharts](https://www.highcharts.com/demo/maps/map-drilldown)
3. Detailed Pie Chart
   - After executing the drilldown, a detailed pie chart for countries should be displayed.
   - This chart should be responsive and adapt to window resolution changes.
   - Relevant API documentation: [Series OnPoint](https://api.highcharts.com/highcharts/plotOptions.series.onPoint)

​
Good luck with the exercise, and remember to consult the linked documentation for more information and guidance!

![exercise.gif](exercise.gif)
