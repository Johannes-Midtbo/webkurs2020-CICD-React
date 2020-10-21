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
        data: './letsDoe.geojson'});
        map.addLayer({
          id: 'polygons',
          type: 'fill',
          source: 'kommune',
          paint: {
          'fill-color': '#088',
          'fill-outline-color': '#800',
          'fill-opacity': 1.0
          },
          });
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;