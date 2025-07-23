# 01 New Series (Stock)

## Prepare, before starting the exercise:
1. Go to the exercise directory: `cd exercises/01-new-series`
2. Clone Highcharts repo: `git clone git@github.com:highcharts/highcharts.git`
3. Remove the git references: `rm -rf highcharts/.git`
4. Go back to the exercise directory: `cd ..`
5. Commit changes and push to your local main branch: `git add . && git commit -m "Imported Highcharts" && git push`
6. Done, you are ready to create your new branch you will work on!


## Create new series
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