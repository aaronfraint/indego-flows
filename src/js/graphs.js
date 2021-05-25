import {
  Chart,
  BarElement,
  BarController,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(BarElement, BarController, Title, CategoryScale, LinearScale);

import { colors } from "./colors";

const makeGraph = () => {
  const chart_ctx = document.getElementById("myChart");
  const data = {
    labels: [],
    datasets: [
      {
        label: "Inbound Trips",
        backgroundColor: "rgba(" + colors.blue + ", 0.5)",
        borderColor: "rgb(" + colors.blue + ")",
        data: [],
      },
      {
        label: "Outbound Trips",
        backgroundColor: "rgba(" + colors.red + ", 0.5)",
        borderColor: "rgb(" + colors.red + ")",
        data: [],
      },
    ],
  };
  const config = {
    type: "bar",
    data,
    options: {
      indexAxis: "y",
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Custom Chart Title",
        },
      },
    },
  };
  return new Chart(chart_ctx, config);
};

const update_graph_with_api_data = (graph, url) => {
  // make a GET request to parse the GeoJSON at the url
  // alert("Inside the reload block");
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.setRequestHeader("Access-Control-Allow-Origin", "*");
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // retrieve the JSON from the response
      var timeSeriesData = JSON.parse(this.response);

      graph.data.labels = [];
      graph.data.datasets[0].data = [];
      graph.data.datasets[1].data = [];

      timeSeriesData.Inbound.labels.forEach((label) => {
        graph.data.labels.push(label);
      });

      timeSeriesData.Inbound.data_values.forEach((val) => {
        graph.data.datasets[0].data.push(val);
      });
      timeSeriesData.Outbound.data_values.forEach((val) => {
        graph.data.datasets[1].data.push(val);
      });

      graph.update();
    }
  };
  request.send();
};

export { update_graph_with_api_data, makeGraph };
