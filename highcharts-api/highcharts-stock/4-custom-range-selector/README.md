# Stock Exercise 4 - Custom Range Selector

Create a custom range selector functionality. Buttons should have a width of
80px and height of 50px each, with 'Group by' text next to the buttons, instead
of the original “Zoom”.

Please, create three buttons "3 days", "2 weeks", and "Quarter".

Each button should change the `dataGrouping` to a period stated in the title.
(i.e., clicking on the "3 days" button should group all points so that the chart
will display a point every three days). Also, upon clicking each button, the
following period should be displayed:
- 3 days should set the axis to 2 week period,
- 2 weeks should set the axis to 2 month period,
- the qarter button should set the chart to a maximum available period.

**Bonus:** Click on the "Quarter" button, then log the series in the console.
Why is there a difference between xData/yData length and points length?

**Bonus 2:** The end of the series is overlapping with the xAxis labels on the
right side, don't you think? How would you resolve this problem? 

![todo.gif](todo.gif)
