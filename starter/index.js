
// Some colors used in the charts
var colors = ['green', 'blue', 'red', 'orange', 'purple', 'fuchsia', 'lime', 'maroon'];
var API_ROOT = 'https://api.noopschallenge.com';
var chart;

window.addEventListener('load', setup);

function setup() {
  loadChart();
  if (/hide\-footer/.test(window.location.search)) {
    document.getElementById('footer').style = 'display:none;';
  }
  document.getElementById('new-chart').addEventListener('click', loadChart);
}

function drawChart(settings) {
  if (chart) chart.destroy();
  var ctx = document.getElementById('chart').getContext('2d');
  chart = new Chart(ctx, settings);
}

function loadChart() {
  return fetch(API_ROOT + '/chartbot', {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    }
  }).then(
    function(r) {
      if (!r.ok) throw new Error('Error fetching chart.');
      return r.json();
    }
  ).then(function(chartData) {
    var chartJsSettings = createChartJsSettings(chartData);
    drawChart(chartJsSettings);
  }, function(error) {
    document.getElementById('error').style='';
  });

  function createChartJsSettings(chartData) {
    if (chartData.type === 'pie') {
      return pieChartOptions(chartData);
    }
    else if (chartData.type === 'time') {
      return timeChartOptions(chartData);
    }
    else {
      throw new Error('Don\'t know how to draw a ' + chartData.type + ' chart!');
    }
  }

  function pieChartOptions(chartData) {
    function getValue(d) { return d.value; }
    function getName(d) { return d.name; }
    return {
      type: 'doughnut', // also try "pie"
      data: {
        datasets:  [{
          data: chartData.datasets.map(getValue),
          backgroundColor: colors
        }],
        labels: chartData.datasets.map(getName),
      },
      options: {
        title: {
          display: true,
          text: chartData.title
        }
      }
    }
  }

  function timeChartOptions(chartData) {
    return {
      type: 'line',
      data: {
        labels: chartData.periods,
        datasets: chartData.datasets.map(function (noopsDataset, index) {
          return {
            borderColor: colors[index % colors.length],
            backgroundColor: 'rgba(0,0,0,0)',
            label: noopsDataset.name,
            data: noopsDataset.data.map(function(item) { return item.value; })
          };
        })
      },
      options: {
        title: {
          display: true,
          text: chartData.title
        }
      }
    };
  }
}
