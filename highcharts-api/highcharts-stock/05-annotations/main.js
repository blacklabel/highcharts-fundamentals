(async () => {
  const data = await fetch(
    'https://demo-live-data.highcharts.com/aapl-c.json'
  ).then(response => response.json());

  const chart = Highcharts.stockChart('container', {
    series: [{
      data: data
    }],

    annotations: [{
      shapes: [{
        x: data[10][0],
        y: data[10][1],
        type: 'rect',
        width: 40,
        height: 40,
        fill: 'red'
      }],
    }]
  });
})();
