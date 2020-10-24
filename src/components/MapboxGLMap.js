import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geo from "./letsDoe.geojson";


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
        data: geo});
        map.addLayer({
          id: 'polygons',
          type: 'line',
          source: 'kommune',
          paint: {
          'line-color': '#000000',
          'line-opacity': 1.0
          },
          });
          map.addLayer({
            id: "kommune-navn",
            type: "symbol",
            source: "kommune",
            layout: {
                "text-field": "{navn}\n",
                "text-font": ["Open Sans Regular"],
                "text-size": 12,
                'symbol-placement': "point"
            },
            paint: {
                "text-color": ["case",
                    ["boolean", ["feature-state", "hover"], false],
                    'rgba(255,0,0,0.75)',
                    'rgba(0,0,0,0.75)'
                ],
                "text-halo-color": ["case",
                    ["boolean", ["feature-state", "hover"], false],
                    'rgba(255,255,0,0.75)',
                    'rgba(255,255,255,0.75)'
                ],
                "text-halo-width": 2,
                "text-halo-blur": 0,
            }
        });
          console.log(6);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;