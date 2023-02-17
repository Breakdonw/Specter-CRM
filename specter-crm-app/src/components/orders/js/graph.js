import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

/* Creating a new Map object. */
var dataMap =new map()
var configMap = new map();

/* An async function that is not being called. */
(async function() {
  // Contact Methods Data
    dataMap.set("contactMethodsData",[4,5,5,13]);
});


// Config for Contact Methods Chart
/* Setting the data for the chart. */
configMap.set("contactMethodsRadarConfig", {
    labels: ["Email","Text","Phone","Other"],
    datasets: [
      {
        abel: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },]
    });


configMap.set("revenueGraphConfig", {
    labels: Utils.months({count: 12}),
    datasets: [
      {
        label: 'Dataset 1',
        data: [100,200,300,200,500,600,250,750],
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },]
    });

new Chart(
    document.getElementById('contactMethodsRadarChart'),
    {type: 'radar',
    data: configMap.get("contactMethodsConfig"),
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Radar Chart'
        }
      }
    }}
)();