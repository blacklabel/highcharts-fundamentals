Highcharts.chart('container', {
    chart: {
        styledMode: true
    },
    title: {
        text: 'Styled Chart'
    },
    series: [{
        type: 'column',
        data: [2, 4, 3, 5]
    }, {
        type: 'spline',
        data: [1, 3, 2, 4]
    }]
});
