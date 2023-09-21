(async () => {

    // Fetching Topology Data
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-continents.topo.json'
    ).then(response => response.json());

    let data = typeof Highcharts === 'object' ? Highcharts.geojson(topology) : [];

    const options = {
        chart: {
            backgroundColor: '#FFFF'
        },
        mapView: {
            projection: {
                name: 'Miller'
            }
        },
        title: {
            text: 'Highcharts Map'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#95D2A5'
                    }
                }
            }
        },
        series: [{
            data,
            name: 'World Continents',
            color: '#CCE7FA',
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    };

    // Create the Map Chart
    Highcharts.mapChart('container', options);
})();
