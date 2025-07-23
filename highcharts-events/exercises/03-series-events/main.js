document.addEventListener('DOMContentLoaded', (event) => {
    // Highcharts.addEvent(...);

    const chart = new Highcharts.chart('container', {
        chart: {
            zoomType: 'xy'
        },
        series: [{
            type: 'column',
            data: [{
                y: 10,
                target: 20
            }, {
                y: 20,
                target: 10
            }, {
                y: -10,
                target: 15
            }, {
                y: 10,
                target: null
            }, {
                y: null
            }]
        }]
    });
});