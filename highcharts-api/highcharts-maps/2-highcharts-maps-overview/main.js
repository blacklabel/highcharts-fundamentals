Highcharts.getJSON(
  'https://code.highcharts.com/mapdata/custom/world-continents.geo.json',
  geojson => {

    const data = [
      ['af', 10],
      ['eu', 10],
      ['sa', 10]
    ];

    Highcharts.mapChart('container', {
      series: [{
        name: 'World map',
        data,
        type: 'map',
        mapData: geojson,
        showInLegend: false
      }]
    });
  }
);
