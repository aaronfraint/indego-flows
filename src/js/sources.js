import { urlRoot } from "./api";

const data_sources = {
  "traffic-stress-tiles": {
    type: "vector",
    url: "https://www.tiles.dvrpc.org/data/lts.json",
    minzoom: 14,
  },
  indego: {
    type: "geojson",
    data: urlRoot + "indego/all",
  },
  "indego-query": {
    type: "geojson",
    data: urlRoot + "indego/trip-points/?q=3004",
  },
  "indego-query-spider": {
    type: "geojson",
    data: urlRoot + "indego/trip-spider/?q=3004",
  },
};

export { data_sources };
