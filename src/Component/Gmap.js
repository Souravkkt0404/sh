import React, { useState } from "react";
import { MapContainer, TileLayer, Marker , Popup} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import logo from "../img/location.png"; 
const App = () => {
  const [locations, setLocations] = useState([
    {
      lat: 13.012312531882426,
      lng: 77.57751383287876,
      name: "Shoolin Consultancy",
      url: 'https://goo.gl/maps/3kQy8vqWAcq7HjHUA'
    },
    {
      lat: 12.944666940498397,
      lng: 77.62247214879906,
      name: "Shoolin Consultancy",
      url: 'https://goo.gl/maps/wtTgAUF7uQ1hV8QP8'
    },
    {
      lat: 12.997247672670076,
      lng: 77.5757835038305,
      name: "Shoolin Consultancy",
      url: 'https://goo.gl/maps/bJXX4BtoKMukKJS89'
    },
    {
      lat: 12.905555664534884,
      lng: 77.51733699977981,
      name: "Shoolin Consultancy",
      url: 'https://goo.gl/maps/dBoHCnRLLQQ3W2Qd9'
    },
  ]);

  const logoIcon = new L.DivIcon({
    className: "custom-icon",
    html: `<img src="${logo}" alt="Logo" width="40" height="40" />`,
  });

  return (
    <MapContainer center={[locations[0].lat, locations[0].lng]} zoom={11} style={{ height: "500px",position:"sticky" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {locations.map((location) => (
  <Marker position={[location.lat, location.lng]} icon={logoIcon}>
    <Popup>
      <a href={location.url} target="_blank" rel="noopener noreferrer">
        {location.name}
      </a>
    </Popup>
  </Marker>
))}
  </MapContainer>
  );
};

export default App;
