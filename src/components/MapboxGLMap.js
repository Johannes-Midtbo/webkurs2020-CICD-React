import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import center from "./Center.geojson";
import border from "./ingennull.geojson";
import nametag from "./CenterKopi.geojson";

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
      
      function addDataLayer(){
        map.addSource('nameTag',{
          type: 'geojson',
          data: nametag});
        map.addSource('pop', {
          type: 'geojson',
          data: center});
          map.addSource('border', {
            type: 'geojson',
            data: border});
        map.addLayer({
          id: 'polygons',
          type: 'line',
          source: 'border',
          paint: {
          'line-color': '#000000',
          'line-opacity': 0.3
          },
        });
        map.addLayer({
          id: 'noshow',
          type: 'fill',
          source: 'border',
          paint: {
          'fill-opacity': 0.0,
          
          },
        });
        
        map.addLayer({
          id: 'kommune-pop',
          type: 'circle',
          source: 'pop',
          paint: {
            "circle-opacity": 0.7,
              'circle-radius':[
                'interpolate',["exponential", 2],['zoom'],
                0, ['/',['sqrt',['/', ['number',['get', 'pers'],2],3.14]],25],
                12, ['/',['sqrt',['/', ['number',['get', 'pers'],3],3.14]],0.5],
              ],
              'circle-color': '#ff0000'
          }
        });
        map.addLayer({
          id: "kommune-navn",
          type: "symbol",
          source: "nameTag",
          layout: {
              "text-field":[
                'match',
                ['get', 'navn'],
                'null',
                '',
                /* other */ ['get', 'navn']
              ],
              "text-font": ["Open Sans Regular"],
              "text-size": [
                'interpolate',["linear"],['zoom'],
                0, 0,
                8, 16,
              ],
              'symbol-placement': "point",
              'text-offset': [0, 1.0],
              'text-anchor': 'top'
          },
          paint: {
              "text-halo-width": 2,
              "text-halo-blur": 0,
              "text-halo-color": '#ffffff'
          } 
        });
    
        map.on('click', 'noshow', function(e) {
            new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML("Personer i " + e.features[0].properties.navn+":  "+e.features[0].properties.pers)
            .addTo(map);
        });
        
        map.on('mouseenter', 'noshow', function() {
          map.getCanvas().style.cursor = 'pointer';
        });
      }
      map.on("load", () => {
        setMap(map);
        map.resize();
        addDataLayer();
      });
    };

    
    
    if (!map) initializeMap({ setMap, mapContainer });
    
    

    
  }, [ map]);

  return (
    <div>
      <div ref={(el) => (mapContainer.current = el)} style={styles} />
    </div>
  );
};

export default MapboxGLMap;