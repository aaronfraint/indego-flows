import { colors } from "./colors";

const map_layers = {
  // Show existing bike facilities with thin transparent green line
  "bike-lanes": {
    id: "bike-lanes",
    type: "line",
    source: "traffic-stress-tiles",
    "source-layer": "existing_conditions_lts",
    layout: {},
    paint: {
      "line-width": 4,
      "line-opacity": 0.4,
      "line-color": "green",
    },
    filter: ["!=", "bikefacili", "No Accomodation"],
  },

  // Show spider lines for selected station
  // with line width = number of trips
  spider: {
    id: "spider",
    type: "line",
    source: "indego-query-spider",
    layout: {},
    paint: {
      "line-width": ["get", "destinations"],
      "line-opacity": 0.3,
      "line-color": "rgb(" + colors.blue + ")",
    },
  },

  // Show all stations in network as small point
  "indego-all": {
    id: "indego-all",
    type: "circle",
    source: "indego",
    layout: {},
    paint: {
      "circle-opacity": 0.2,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#000000",
      "circle-stroke-opacity": 0.5,
      "circle-radius": 2,
    },
  },

  // Show a set of points related to the selected station
  // scale station points by number of trips to or from
  // the selected station
  "indego-query": {
    id: "indego-query",
    type: "circle",
    source: "indego-query",
    paint: {
      "circle-color": "rgb(" + colors.blue + ")",
      "circle-opacity": 0.3,
      "circle-stroke-width": 2,
      "circle-stroke-color": "rgb(" + colors.blue + ")",
      "circle-radius": ["get", "destinations"],
    },
  },

  // Show the single selected station with a yellow fill/outline
  "indego-selected": {
    id: "indego-selected",
    type: "circle",
    source: "indego-query",
    paint: {
      "circle-opacity": 0.5,
      "circle-color": "#fff123",
      "circle-stroke-width": 5,
      "circle-stroke-color": "#fff123",
      "circle-radius": ["get", "destinations"],
    },
    filter: ["in", "station_id", 3004],
  },
};

export { map_layers };
