# Stock exercise 2

Create a simple Stock chart.

Add functionality that will scale yAxis on drag. Let's say we have extremes 1000-2000. When you click and drag yAxis, 1500 tick will stay in the same place, but min and max will proportionally scale:
- if moving mouse up, axis range will be smaller, e.g. 1100-1900, then 1200-1800 etc. (1500 is still in the middle)
- if moving mouse down, axis range will be greater, e.g. 900-2100, then (when moving mouse further down) 800-2200 etc.
You can find and see this functionality on https://pl.tradingview.com/

Create 2 seperate yAxes and add the functionality to each of them to work seperately. See the gif below for reference:
