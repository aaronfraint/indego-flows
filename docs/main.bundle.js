(()=>{"use strict";const e="0, 128, 255",t="175, 9, 159",i="0, 0, 0",o=(e,t)=>{var i=new XMLHttpRequest;i.open("GET",t,!0),i.setRequestHeader("Access-Control-Allow-Origin","*"),i.onload=function(){if(this.status>=200&&this.status<400){var t=JSON.parse(this.response);e.data.labels=[],e.data.datasets[0].data=[],e.data.datasets[1].data=[],t.Inbound.labels.forEach((t=>{e.data.labels.push(t)})),t.Inbound.data_values.forEach((t=>{e.data.datasets[0].data.push(t)})),t.Outbound.data_values.forEach((t=>{e.data.datasets[1].data.push(t)})),e.update()}},i.send()},r="https://lts-fastapi-c8pjh.ondigitalocean.app/",a={"traffic-stress-tiles":{type:"vector",url:"https://www.tiles.dvrpc.org/data/lts.json",minzoom:14},indego:{type:"geojson",data:r+"indego/all"},"indego-query":{type:"geojson",data:r+"indego/trip-points/?q=3004"},"indego-query-spider":{type:"geojson",data:r+"indego/trip-spider/?q=3004"}};mapboxgl.accessToken="pk.eyJ1IjoiYWFyb25kdnJwYyIsImEiOiJja2NvN2s5dnAwaWR2MnptbzFwYmd2czVvIn0.Fcc34gzGME_zHR5q4RnSOg";const s=(e,t)=>{e.on("click","indego-all",(function(i){var o=i.features[0].properties;const a=document.querySelector("#station-name"),s=document.querySelector("#station-address");a.innerHTML=o.name,s.innerHTML=o.addressstreet,t.options.plugins.title.text=o.name;var n=["in","station_id",o.station_id];e.setFilter("indego-selected",n);let d=r+"indego/trip-points/?q="+o.station_id.toString();var l=new XMLHttpRequest;l.open("GET",d,!0),l.setRequestHeader("Access-Control-Allow-Origin","*"),l.onload=function(){if(this.status>=200&&this.status<400){var t=JSON.parse(this.response);e.getSource("indego-query").setData(t);var i=new mapboxgl.LngLatBounds;t.features.forEach((function(e){e.properties.origins>=2&&i.extend(e.geometry.coordinates)})),e.fitBounds(i),e.setPaintProperty("indego-all","circle-radius",2)}},l.send();let c=r+"indego/trip-spider/?q="+o.station_id.toString();var p=new XMLHttpRequest;p.open("GET",c,!0),p.setRequestHeader("Access-Control-Allow-Origin","*"),p.onload=function(){if(this.status>=200&&this.status<400){var t=JSON.parse(this.response);e.getSource("indego-query-spider").setData(t)}},p.send();let u=r+"indego/timeseries/?q="+o.station_id.toString();update_graph_with_api_data(t,u)}))},n={"bike-lanes":{id:"bike-lanes",type:"line",source:"traffic-stress-tiles","source-layer":"existing_conditions_lts",layout:{},paint:{"line-width":4,"line-opacity":.4,"line-color":"green"},filter:["!=","bikefacili","No Accomodation"]},spider:{id:"spider",type:"line",source:"indego-query-spider",layout:{},paint:{"line-width":["get","destinations"],"line-opacity":.3,"line-color":"rgb("+e+")"}},"indego-all":{id:"indego-all",type:"circle",source:"indego",layout:{},paint:{"circle-opacity":.2,"circle-stroke-width":1,"circle-stroke-color":"#000000","circle-stroke-opacity":.5,"circle-radius":2}},"indego-query":{id:"indego-query",type:"circle",source:"indego-query",paint:{"circle-color":"rgb("+e+")","circle-opacity":.3,"circle-stroke-width":2,"circle-stroke-color":"rgb("+e+")","circle-radius":["get","destinations"]}},"indego-selected":{id:"indego-selected",type:"circle",source:"indego-query",paint:{"circle-opacity":.5,"circle-color":"#fff123","circle-stroke-width":5,"circle-stroke-color":"#fff123","circle-radius":["get","destinations"]},filter:["in","station_id",3004]}},d=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v10",center:[-75.16362,39.95238],zoom:12}),l=(()=>{const i=document.getElementById("myChart");return new Chart(i,{type:"bar",data:{labels:[],datasets:[{label:"Inbound Trips",backgroundColor:"rgba("+e+", 0.5)",borderColor:"rgb("+e+")",data:[]},{label:"Outbound Trips",backgroundColor:"rgba("+t+", 0.5)",borderColor:"rgb("+t+")",data:[]}]},options:{indexAxis:"y",maintainAspectRatio:!1,plugins:{title:{display:!0,text:"Custom Chart Title"}}}})})();d.on("load",(function(){o(l,r+"indego/timeseries/?q=3004"),l.options.plugins.title.text="Municipal Services Building Plaza";for(const e in a)d.addSource(e,a[e]);for(const e in n)d.addLayer(n[e]);(e=>{e.on("mouseenter","indego-all",(()=>{e.getCanvas().style.cursor="pointer",e.setPaintProperty("indego-all","circle-radius",15)})),e.on("mouseleave","indego-all",(()=>{e.getCanvas().style.cursor="",e.setPaintProperty("indego-all","circle-radius",2)}))})(d),s(d,l)})),(o=>{document.querySelector("#directionality").addEventListener("change",(r=>{var a=r.target.value;if("origins"==a)var s="rgb("+t+")";if("destinations"==a)s="rgb("+e+")";if("totalTrips"==a)s="rgb("+i+")";o.setPaintProperty("spider","line-color",s),o.setPaintProperty("indego-query","circle-color",s),o.setPaintProperty("indego-query","circle-stroke-color",s),o.setPaintProperty("indego-selected","circle-radius",["get",r.target.value]),o.setPaintProperty("indego-query","circle-radius",["get",r.target.value]),o.setPaintProperty("spider","line-width",["get",r.target.value])}))})(d)})();