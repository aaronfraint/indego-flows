(()=>{const e="https://lts-fastapi-c8pjh.ondigitalocean.app/",t="0, 128, 255",a="175, 9, 159",r="0, 0, 0",i=document.getElementById("myChart");var o=new Chart(i,{type:"bar",data:{labels:[],datasets:[{label:"Inbound Trips",backgroundColor:"rgba("+t+", 0.5)",borderColor:"rgb("+t+")",data:[]},{label:"Outbound Trips",backgroundColor:"rgba("+a+", 0.5)",borderColor:"rgb("+a+")",data:[]}]},options:{indexAxis:"y",maintainAspectRatio:!1,plugins:{title:{display:!0,text:"Custom Chart Title"}}}});const s=e=>{var t=new XMLHttpRequest;t.open("GET",e,!0),t.setRequestHeader("Access-Control-Allow-Origin","*"),t.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);o.data.labels=[],o.data.datasets[0].data=[],o.data.datasets[1].data=[],e.Inbound.labels.forEach((e=>{o.data.labels.push(e)})),console.log(o.data.labels),e.Inbound.data_values.forEach((e=>{o.data.datasets[0].data.push(e)})),e.Outbound.data_values.forEach((e=>{o.data.datasets[1].data.push(e)})),o.update()}},t.send()};mapboxgl.accessToken="pk.eyJ1IjoiYWFyb25kdnJwYyIsImEiOiJja2NvN2s5dnAwaWR2MnptbzFwYmd2czVvIn0.Fcc34gzGME_zHR5q4RnSOg";var n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v10",center:[-75.16362,39.95238],zoom:12});n.on("load",(function(){s(e+"indego/timeseries/?q=3004"),n.addSource("LTS",{type:"vector",data:" https://www.tiles.dvrpc.org/data/lts.json"}),n.addSource("indego",{type:"geojson",data:e+"indego/all"}),n.addSource("indego-query",{type:"geojson",data:e+"indego/trip-points/?q=3004"}),n.addSource("indego-query-spider",{type:"geojson",data:e+"indego/trip-spider/?q=3004"}),n.addLayer({id:"spider",type:"line",source:"indego-query-spider",layout:{},paint:{"line-width":["get","destinations"],"line-opacity":.3,"line-color":"rgb("+t+")"}}),n.addLayer({id:"indego-all",type:"circle",source:"indego",layout:{},paint:{"circle-opacity":.2,"circle-stroke-width":1,"circle-stroke-color":"#000000","circle-stroke-opacity":.5,"circle-radius":2}}),n.addLayer({id:"indego-query",type:"circle",source:"indego-query",paint:{"circle-color":"rgb("+t+")","circle-opacity":.3,"circle-stroke-width":2,"circle-stroke-color":"rgb("+t+")","circle-radius":["get","destinations"]}}),n.addLayer({id:"indego-selected",type:"circle",source:"indego-query",paint:{"circle-opacity":.5,"circle-color":"#fff123","circle-stroke-width":5,"circle-stroke-color":"#fff123","circle-radius":["get","destinations"]},filter:["in","station_id",3004]}),n.on("mouseenter","indego-all",(()=>{n.getCanvas().style.cursor="pointer",n.setPaintProperty("indego-all","circle-radius",15)})),n.on("mouseleave","indego-all",(()=>{n.getCanvas().style.cursor="",n.setPaintProperty("indego-all","circle-radius",2)})),n.on("click","indego-all",(function(t){var a=t.features[0].properties;const r=document.querySelector("#station-name"),i=document.querySelector("#station-address");r.innerHTML=a.name,i.innerHTML=a.addressstreet;var o=["in","station_id",a.station_id];n.setFilter("indego-selected",o);let d=e+"indego/trip-points/?q="+a.station_id.toString();var l=new XMLHttpRequest;l.open("GET",d,!0),l.setRequestHeader("Access-Control-Allow-Origin","*"),l.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);n.getSource("indego-query").setData(e);var t=new mapboxgl.LngLatBounds;e.features.forEach((function(e){e.properties.origins>=2&&t.extend(e.geometry.coordinates)})),n.fitBounds(t),n.setPaintProperty("indego-all","circle-radius",2)}},l.send();let c=e+"indego/trip-spider/?q="+a.station_id.toString();var p=new XMLHttpRequest;p.open("GET",c,!0),p.setRequestHeader("Access-Control-Allow-Origin","*"),p.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);n.getSource("indego-query-spider").setData(e)}},p.send();let u=e+"indego/timeseries/?q="+a.station_id.toString();s(u)}))}));document.querySelector("#directionality").addEventListener("change",(e=>{var i=e.target.value;if("origins"==i)var o="rgb("+a+")";if("destinations"==i)o="rgb("+t+")";if("totalTrips"==i)o="rgb("+r+")";n.setPaintProperty("spider","line-color",o),n.setPaintProperty("indego-query","circle-color",o),n.setPaintProperty("indego-query","circle-stroke-color",o),n.setPaintProperty("indego-selected","circle-radius",["get",e.target.value]),n.setPaintProperty("indego-query","circle-radius",["get",e.target.value]),n.setPaintProperty("spider","line-width",["get",e.target.value])}))})();