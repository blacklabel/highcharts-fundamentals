document.addEventListener('DOMContentLoaded', (event) => {
    const chartA = new Highcharts.chart('chartA', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Chart A'
        },
        series: [{
            data: [5, 10, 12, 7.6, 19, -5, -12, 6, 22, 14]
        }]
    });

    const chartB = new Highcharts.chart('chartB', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Chart B'
        },
        series: [{
            data: [1, 2, 1, 2, -1, -2, 4, -1, 1, 1, 0]
        }]
    });
});