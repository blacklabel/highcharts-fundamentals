# Maps Exercise 3 - Dynamic Drilldown
​
![Sample Map Drilldown Visualization](map-drilldown.gif)
​
Your task is to create a script that generates a dynamic map drilldown representation, akin to the one presented in the sample. The specific requirements are:
​
## 1. Base World Continent View
- Retrieve topological data for world continents.
- The data should be fetched from an external source and then transformed into a format compatible with Highcharts maps.
- Useful documentation: [Getting Started with Highcharts maps](https://www.highcharts.com/docs/maps/getting-started)
​
## 2. Adding the `mappoint` Series
- For a basic world view, add a `mappoint` series consistent with the sample presentation.
- Use the symbol type 'mapmarker'.
- Documentation: [Mappoint Series](https://www.highcharts.com/docs/maps/mappoint-series)
​
## 3. Implement Drilldown
- On clicking a continent, a detailed map of the countries within that continent should be displayed (e.g., Europe, America).
- Example: [Map Drilldown in Highcharts](https://www.highcharts.com/demo/maps/map-drilldown)
​
## 4. Detailed Pie Chart
- After executing the drilldown, a detailed pie chart for countries should be displayed.
- This chart should be responsive and adapt to window resolution changes.
- Relevant API documentation: [Series OnPoint](https://api.highcharts.com/highcharts/plotOptions.series.onPoint)
​
---
​
Good luck with your task, and ensure to consult the linked documentation for more information and guidance!
