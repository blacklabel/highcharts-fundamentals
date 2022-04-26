# Stock exercise 3

1. Create a new line series type based on the "How to create a custom indicator" article.
2. Recalculate the series' y values using the `getValues` method (any math algorithm you like).
3. Render a line connecting the first point with the last point. The new line should work with all the Highcharts features (`series.update`, `series.remove`, `chart.addSeries`, `point.update`, `series.setVisible` etc.). The line should be customizable from the series options:
```js
{
    type: 'customline',
    data: [...],
    linkOptions: {
        width: ...,
        color: ...,
        dashStyle: ...,
        opacity: ...
    }
}
```
4. Write API doclets for new options and few simple unit tests.