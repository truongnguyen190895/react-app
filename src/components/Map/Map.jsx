import React, { useState, useRef, useCallback } from 'react';
import MapGL from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import Geocoder from "react-map-gl-geocoder";



const MAPBOX_TOKEN = 'pk.eyJ1IjoidHJ1b25nbmd1eWVuMTkwODk1IiwiYSI6ImNrc3I3NDd6ZjBqcHoyeG4xampzc3N2ZW0ifQ.zS68aQ32Ktla3IVsWii5Pw'

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 21.02738276864411,
    longitude: 105.83318632938982,
    zoom: 8,
    bearing: 0,
    pitch: 0
  });

  function handleClick(e) {
    e.preventDefault();
    setViewport((prev) => {
      return { ...prev, latitude: 22.01245, longitude: 106 }
    })
  }


  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const geolocateControlStyle = {
    right: 200,
    top: 100
  };

  return (
    <div>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="50vw"
        height="50vh"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >

        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
      <button onClick={handleClick}>Get Location</button> <br />
      <input type='text' placeholder='your location' />
    </div>

  );
}

export default Map;
