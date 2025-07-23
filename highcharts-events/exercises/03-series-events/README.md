# Exercise 03

Add to each point in a column series a triangle which will represent the target.
Use `Highcharts.addEvent()`'s. The target should be updated (animated) when the
point is updated, chart is being resized, zoomed in/out etc. 

**Hints:**
- You can read the value of the `target` option this way: `point.options.target`
- Check [series.events](https://api.highcharts.com/class-reference/Highcharts.Series#render)