import { Form, Button } from "react-bootstrap";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidHJ1b25nbmd1eWVuMTkwODk1IiwiYSI6ImNrc3I3NDd6ZjBqcHoyeG4xampzc3N2ZW0ifQ.zS68aQ32Ktla3IVsWii5Pw";

export default function Session(props) {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");

  function handleClick(e) {
    e.preventDefault();
    history.push("/session/create/2");
  }

  function handleBack(e) {
    e.preventDefault();
    history.push("/");
  }
  const [viewport, setViewport] = useState({
    latitude: 21.02738276864411,
    longitude: 105.83318632938982,
    zoom: 15,
    bearing: 0,
    pitch: 0,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  //call API to get Data from Mapbox
  function getData(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        callback(null, data);
      } else {
        callback(new Error(this.statusText));
      }
    };

    xhr.open("GET", url); //get data
    xhr.send();
  }
  function handleAPI() {
    getData(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${viewport.longitude},${viewport.latitude}.json?access_token=${MAPBOX_TOKEN}`,
      (err, data) => {
        console.log(data);
        setLocation(data.features[2].place_name);
      }
    );
  }

  return (
    <div className="create-session">
      <h1 style={{ margin: "30px 0", textAlign: "center" }}>
        Create new session to Vote
      </h1>
      {setViewport.latitude}
      <Form>
        {/* <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            style={{ marginBottom: "40px" }}
            type="email"
            placeholder="Your name"
            required
          />
        </Form.Group> */}

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Your current location</Form.Label> <br />
          <MapGL
            ref={mapRef}
            {...viewport}
            width="30vw"
            height="50vh"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            <Geocoder
              mapRef={mapRef}
              onViewportChange={handleGeocoderViewportChange}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              position="top-left"
            />
          </MapGL>
          <Button style={{ marginTop: "40px" }} onClick={handleAPI}>
            Chose from map
          </Button>
          <Form.Control
            style={{ marginTop: "30px" }}
            type="text"
            placeholder="Location"
            value={location}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleBack}
          style={{ margin: "50px 20px 0 0" }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleClick}
          style={{ marginTop: "50px" }}
        >
          Next
        </Button>
      </Form>
    </div>
  );
}
