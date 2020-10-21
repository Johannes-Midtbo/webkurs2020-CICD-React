import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const styles = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [10.408773,63.422091],
        zoom: 8
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
        map.addSource('kommune',{
        type: 'geojson',
        data: "https://render.githubusercontent.com/view/geojson?commit=5d404195ec15558f0e322854163457e07bb20689&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f4a6f68616e6e65732d4d696474626f2f7765626b757273323032302d434943442d52656163742f356434303431393565633135353538663065333232383534313633343537653037626232303638392f6c657473446f652e67656f6a736f6e&nwo=Johannes-Midtbo%2Fwebkurs2020-CICD-React&path=letsDoe.geojson&repository_id=306060769&repository_type=Repository#209eb419-96f8-4d3e-bd37-121c2e3276e3"});
        map.addLayer({
          id: 'polygons',
          type: 'fill',
          source: 'kommune',
          'paint': {
          'fill-color': '#088',
          'fill-outline-color': '#800',
          'fill-opacity': 1.0
          },
          });
          console.log(5);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;