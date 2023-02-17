import Chart from 'chart.js/auto'

/* Creating a new Map object. */
var dataMap =new map()
var configMap = new map();

/* An async function that is not being called. */
(async function() {
    dataMap.set("contactMethodsData",[4,5,5,13]);
});

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