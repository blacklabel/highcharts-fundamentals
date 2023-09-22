(async () => {

    // Fetching Topology Data
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-continents.topo.json'
    ).then(response => response.json());

    // Chart Data Definition
    const chartData = [{
        name: 'North America',
        coordinates: [45, -100],
        countries: [{
            name: 'United States of America',
            coordinates: [37.0902, -95.7129],
            data: [30, 50, 20],
        }, {
            name: 'Canada',
            coordinates: [56.1304, -106.3468],
            data: [40, 30, 30]
        }, {
            name: 'Mexico',
            coordinates: [23.6345, -102.5528],
            data: [10, 40, 50]
        }]
    }, {
        name: 'Europe',
        coordinates: [50, 10],
        countries: [{
            name: 'France',
            coordinates: [46.2276, 2.2137],
            data: [50, 20, 30]
        }, {
            name: 'Germany',
            coordinates: [51.1657, 10.4515],
            data: [20, 50, 30]
        }, {
            name: 'Spain',
            coordinates: [40.4637, -3.7492],
            data: [30, 30, 40]
        }, {
            name: 'Italy',
            coordinates: [41.8719, 12.5674],
            data: [10, 60, 30]
        }]
    }, {
        name: 'Asia',
        coordinates: [0, 120],
        countries: [{
            name: 'China',
            coordinates: [35.8617, 104.1954],
            data: [25, 40, 35]
        }, {
            name: 'Japan',
            coordinates: [36.2048, 138.2529],
            data: [15, 50, 35]
        }, {
            name: 'India',
            coordinates: [20.5937, 78.9629],
            data: [20, 30, 50]
        }]
    }, {
        name: 'South America',
        coordinates: [-15, -60],
        countries: [{
            name: 'Brazil',
            coordinates: [-14.235, -51.9253],
            data: [40, 30, 30]
        }, {
            name: 'Peru',
            coordinates: [-9.19, -75.0152],
            data: [20, 50, 30]
        }, {
            name: 'Colombia',
            coordinates: [4.5709, -74.2973],
            data: [30, 30, 40]
        }]
    }];

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
