(async () => {
  const data = await fetch(
    'https://demo-live-data.highcharts.com/aapl-ohlcv.json'
  ).then((response) => response.json());

  Highcharts.chart('container', {
    xAxis: {
      type: 'datetime'
    },

    yAxis: {
      title: {
        text: 'Value'
      }
    },

    series: [
      {
        type: 'line',
        data: data
      }
    ]
  });
})();
