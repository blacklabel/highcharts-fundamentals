(async () => {

  // Load the dataset
  const data = await fetch(
    'https://demo-live-data.highcharts.com/aapl-c.json'
  ).then(response => response.json());

  // Create the chart
  Highcharts.stockChart('container', {
    title: {
      text: 'AAPL Stock Price'
    },

    series: [{
      name: 'AAPL',
      data: data,
    }]
  });
})();
