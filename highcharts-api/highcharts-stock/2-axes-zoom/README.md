# Stock exercise 2

Create a simple Stock chart.

a) Add functionality that will scale yAxis on drag. Let's say we have extremes 1000-2000. When you click and drag yAxis, 1500 tick will stay in the same place, but min and max will proportionally scale:
- if moving mouse up, axis range will be smaller, e.g. 1100-1900, then 1200-1800 etc. (1500 is still in the middle)
- if moving mouse down, axis range will be greater, e.g. 900-2100, then (when moving mouse further down) 800-2200 etc.
You can find and see this functionality on https://pl.tradingview.com/

b) Add functionality that will increase/decrease xAxis.min on mousewheel event (maximally to the first data point). xAxis.max should not change.

c) Then combine both of the above functionalities. Add the xAxis functionality to the yAxis: first functionality (mousedown and mouseup) is not changed, but second functionality (mousewheel):
- changes both min and max when doing mousewheel over the yAxis' labels
- changes only min (like in the previous task) when not hovering over the yAxis' labels (between them)

d) Add a separate yAxis on a separate pane. Make the mousewheel functionality work on each yAxis separately.