Highcharts.stockChart('container', {
  series: [{
    id: 'main',
    data: Array.from({
      length: 500
    }, (_, i) => Math.sin(i / 10) * i + i)
  }, {
    type: 'customIndicator',
    linkedTo: 'main',
    lineColor: 'green',
    params: {
        period: 5
    },
    gmaLine: {
        styles: {
            lineColor: 'purple'
        }
    }
  }]
});
