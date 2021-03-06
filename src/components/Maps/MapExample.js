import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
//25.025555948276757, 121.54115979094041
const MapExampleScript = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 25.025555948276757, lng: 121.54115979094041 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#4299e1" }, { visibility: "on" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 25.025555948276757 , lng: 121.54115979094041 }} />
    </GoogleMap>
  ))
);

function MapExample() {
  return (
    <MapExampleScript
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDa38mKVtPLL79uSyUTU2Ff-6We3chZd-c"
      loadingElement={<div className="h-full" />}
      containerElement={<div className="relative w-full rounded h-600-px" />}
      mapElement={<div className="rounded h-full" />}
    />
  );
}

export default MapExample;
