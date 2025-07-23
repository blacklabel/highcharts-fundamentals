QUnit.module('Simple Chart test', function() {
    QUnit.test('Chart loaded', function(assert) {

        const chart = Highcharts.chart('container', {

            chart: {
                marginRight: 50
            },
        
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, {
                    dataLabels: {
                        enabled: true,
                        align: 'left',
                        style: {
                            fontWeight: 'bold'
                        },
                        x: 3,
                        verticalAlign: 'middle',
                        overflow: true,
                        crop: false
                    },
                    y: 54.4
                }]
            }]
        
        });

        assert.equal(chart.series.length, 1, 'Chart is loaded and has one series.');
    });
});