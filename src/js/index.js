import { colors } from "./colors";
import { update_graph_with_api_data, makeGraph } from "./graphs";
import { data_sources } from "./sources";
import { urlRoot } from "./api";
import { makeMap } from "./map";
import {
  wire_up_dropdown_selector,
  add_map_hover_styles,
  add_map_click_actions,
} from "./user_interaction";
import { map_layers } from "./layers";

const map = makeMap();

const bar_chart = makeGraph();

map.on("load", function () {
  // populate the bar chart with data for the default station
  update_graph_with_api_data(bar_chart, urlRoot + "indego/timeseries/?q=3004");
  bar_chart.options.plugins.title.text = "Municipal Services Building Plaza";

  // Add map data sources and layer styling
  for (const src in data_sources) map.addSource(src, data_sources[src]);
  for (const lyr in map_layers) map.addLayer(map_layers[lyr]);

  // Set hover interactions
  add_map_hover_styles(map);

  // Set click interactions
  add_map_click_actions(map, bar_chart);
});

// Tie the dropdown selector to map updates
wire_up_dropdown_selector(map);
