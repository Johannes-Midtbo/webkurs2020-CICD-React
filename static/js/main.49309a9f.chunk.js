(this["webpackJsonpreact-bedpress"]=this["webpackJsonpreact-bedpress"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/Center.1f9207cc.geojson"},function(e,t,n){e.exports=n.p+"static/media/ingennull.49f8fda6.geojson"},function(e,t,n){e.exports=n.p+"static/media/CenterKopi.34d3f71b.geojson"},,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),i=n.n(r),c=(n(13),{height:"60px",width:"100vw",padding:"10px",textAlign:"center",fontSize:"30px"}),s=function(){return a.a.createElement("div",{style:c},a.a.createElement("header",null,"Folketall i Tr\xf8nderske Kommuner"))},l=n(7),p=n(1),u=n.n(p),d=(n(14),n(4)),f=n.n(d),m=n(5),h=n.n(m),y=n(6),g=n.n(y),b={width:"100%",height:"calc(100vh - 80px)",position:"absolute"};var v=function(){var e=Object(o.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(o.useRef)(null);return Object(o.useEffect)((function(){u.a.accessToken="pk.eyJ1Ijoia2Vpbm8iLCJhIjoiY2tnN2tuMnUyMDd5NDJ4b2Nlb2RhcTA4bSJ9._je8QOLR8ySMeHK4rOkTqA";n||function(e){var t=e.setMap,n=e.mapContainer,o=new u.a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v11",center:[10.408773,63.422091],zoom:8});o.on("load",(function(){t(o),o.resize(),o.addSource("nameTag",{type:"geojson",data:g.a}),o.addSource("pop",{type:"geojson",data:f.a}),o.addSource("border",{type:"geojson",data:h.a}),o.addLayer({id:"polygons",type:"line",source:"border",paint:{"line-color":"#000000","line-opacity":.3}}),o.addLayer({id:"noshow",type:"fill",source:"border",paint:{"fill-opacity":0}}),o.addLayer({id:"kommune-pop",type:"circle",source:"pop",paint:{"circle-opacity":.7,"circle-radius":["/",["sqrt",["/",["get","pers"],3.14]],7],"circle-color":"#ff0000"}}),o.addLayer({id:"kommune-navn",type:"symbol",source:"nameTag",layout:{"text-field":["match",["get","navn"],"null","",["get","navn"]],"text-font":["Open Sans Regular"],"text-size":15,"symbol-placement":"point","text-offset":[0,1],"text-anchor":"top"},paint:{"text-halo-width":2,"text-halo-blur":0,"text-halo-color":"#ffffff"}}),o.on("click","noshow",(function(e){(new u.a.Popup).setLngLat(e.lngLat).setHTML("Personer i "+e.features[0].properties.navn+":  "+e.features[0].properties.pers).addTo(o)})),o.on("mouseenter","noshow",(function(){o.getCanvas().style.cursor="pointer"}))}))}({setMap:r,mapContainer:i})}),[n]),a.a.createElement("div",null,a.a.createElement("div",{ref:function(e){return i.current=e},style:b}))},x={overflow:"hidden"};var w=function(){return a.a.createElement("div",{style:x},a.a.createElement(s,null),a.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.49309a9f.chunk.js.map