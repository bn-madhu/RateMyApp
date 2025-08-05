import { MapService } from "google-map-for-agent";

function MapServices({ className, locations }) {
  return (
    <MapService
      locations={locations}
    />
  );
}

export default MapServices;
