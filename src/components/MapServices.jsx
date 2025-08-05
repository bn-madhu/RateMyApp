import { MapService } from "google-map-for-agent";
import React from "react";

function MapServices({ locations }) {

  const [currentlocation, setCurrentPosition] = React.useState([]);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      },
      (err) => <ErrorModel message={err.message} />,
      { enableHighAccuracy: true }
    );
  }, []);

  console.log(currentlocation)

  return (
    <MapService
      locations={locations}
    />
  );
}

export default MapServices;
