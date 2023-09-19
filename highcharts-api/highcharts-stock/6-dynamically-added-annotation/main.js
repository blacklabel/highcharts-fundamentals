(async () => {
  const data = await fetch(
    'https://demo-live-data.highcharts.com/aapl-c.json'
  ).then((response) => response.json());

  Highcharts.stockChart('container', {
    rangeSelector: {
      selected: 1
    },
    title: {
      text: ''
    },
    series: [
      {
        name: 'AAPL',
        data: data,
        type: 'spline'
      }
    ]
  });
})();
