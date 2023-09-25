Highcharts.ganttChart('container', {

  series: [{
    name: 'Project 1',
    data: [{
      name: 'Main',
      pointWidth: 0
    }, {
      name: 'First',
      start: 1560902400000,
      end: 1561075200000,
    }, {
      name: 'Second',
      start: 1560902400000,
      end: 1561075200000
    }, {
      name: 'Second',
      start: 1561507200000,
      end: 1561680000000
    }]
  }]

});
