import { colors } from "./colors";
import { urlRoot } from "./api";

const wire_up_dropdown_selector = (map) => {
  const selectElement = document.querySelector("#directionality");

  selectElement.addEventListener("change", (event) => {
    var v = event.target.value;
    if (v == "origins") {
      var color = "rgb(" + colors.red + ")";
    }
    if (v == "destinations") {
      var color = "rgb(" + colors.blue + ")";
    }
    if (v == "totalTrips") {
      var color = "rgb(" + colors.black + ")";
    }

    map.setPaintProperty("spider", "line-color", color);
    map.setPaintProperty("indego-query", "circle-color", color);
    map.setPaintProperty("indego-query", "circle-stroke-color", color);

    map.setPaintProperty("indego-selected", "circle-radius", [
      "get",
      event.target.value,
    ]);
    map.setPaintProperty("indego-query", "circle-radius", [
      "get",
      event.target.value,
    ]);
    map.setPaintProperty("spider", "line-width", ["get", event.target.value]);
  });
};

const add_map_hover_styles = (map) => {
  // hovering over the "all" layer makes the dots grow and show that they're clickable
  map.on("mouseenter", "indego-all", () => {
    map.getCanvas().style.cursor = "pointer";
    map.setPaintProperty("indego-all", "circle-radius", 15);
  });

  // moving mouse away from "all" layer makes them small again
  map.on("mouseleave", "indego-all", () => {
    map.getCanvas().style.cursor = "";
    map.setPaintProperty("indego-all", "circle-radius", 2);
  });
};

const add_map_click_actions = (map, graph) => {
  map.on("click", "indego-all", function (e) {
    var props = e.features[0].properties;

    // Update the title in the header block and address
    const stationTextDiv = document.querySelector("#station-name");
    const stationAddressTextDiv = document.querySelector("#station-address");

    stationTextDiv.innerHTML = props.name;
    stationAddressTextDiv.innerHTML = props.addressstreet;

    graph.options.plugins.title.text = props.name;

    // filter selected layer to this id
    var id_filter = ["in", "station_id", props.station_id];
    map.setFilter("indego-selected", id_filter);

    // hit the API for station points
    let point_url =
      urlRoot + "indego/trip-points/?q=" + props.station_id.toString();

    // get the point data from the API
    var point_request = new XMLHttpRequest();
    point_request.open("GET", point_url, true);
    point_request.setRequestHeader("Access-Control-Allow-Origin", "*");
    point_request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // retrieve the JSON from the response
        var json = JSON.parse(this.response);
        map.getSource("indego-query").setData(json);

        // Get a bounding box of high-volume stations
        var bounds = new mapboxgl.LngLatBounds();

        json.features.forEach(function (feature) {
          // TODO: tie this to the selected direction instead of origins
          if (feature.properties.origins >= 2) {
            bounds.extend(feature.geometry.coordinates);
          }
        });

        // zoom map to fit bounding box that was just defined
        map.fitBounds(bounds);

        // force the full station layer back to small dots (user may not have mouseexited yet)
        map.setPaintProperty("indego-all", "circle-radius", 2);
      }
    };
    point_request.send();

    // hit the API for spider lines and update mapbox data source afterwards
    let spider_url =
      urlRoot + "indego/trip-spider/?q=" + props.station_id.toString();

    var spider_request = new XMLHttpRequest();
    spider_request.open("GET", spider_url, true);
    spider_request.setRequestHeader("Access-Control-Allow-Origin", "*");
    spider_request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // retrieve the JSON from the response
        var json = JSON.parse(this.response);
        map.getSource("indego-query-spider").setData(json);
      }
    };
    spider_request.send();

    let time_url =
      urlRoot + "indego/timeseries/?q=" + props.station_id.toString();
    update_graph_with_api_data(graph, time_url);
  });
};

export {
  wire_up_dropdown_selector,
  add_map_hover_styles,
  add_map_click_actions,
};
