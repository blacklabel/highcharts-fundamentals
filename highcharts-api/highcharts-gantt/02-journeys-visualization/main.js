Highcharts.ganttChart('container', {

  title: {
    text: 'Journeys (visualization)'
  },

  series: [{
    name: 'Journeys',
    data: [{
      name: 'Cruises',
      id: 'cruises',
      start: Date.UTC(2024, 0, 1),
      end: Date.UTC(2024, 0, 4)
    }, {
      name: 'Flights',
      id: 'flights',
      start: Date.UTC(2024, 0, 3),
      end: Date.UTC(2024, 0, 7)
    }]
  }]
	
});
