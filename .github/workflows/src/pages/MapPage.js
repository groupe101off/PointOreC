import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix pour les icônes Leaflet avec React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const defaultPosition = [48.8584, 2.2945];

function AddPoint({ onAdd }) {
  useMapEvents({
    click(e) {
      const note = prompt("Note pour ce point ?");
      if (note) {
        onAdd({ position: [e.latlng.lat, e.latlng.lng], note });
      }
    },
  });
  return null;
}

const MapPage = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState([
    { position: [48.8584, 2.2945], note: "Tour Eiffel" },
    { position: [48.853, 2.3499], note: "Notre-Dame" },
  ]);

  const handleAddPoint = (pt) => setPoints([...points, pt]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={defaultPosition} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddPoint onAdd={handleAddPoint} />
        {points.map((pt, idx) => (
          <Marker key={idx} position={pt.position}>
            <Popup>
              <b>Note :</b> {pt.note}
              <br />
              <small>[{pt.position[0].toFixed(5)}, {pt.position[1].toFixed(5)}]</small>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          background: "white",
          padding: "10px",
          borderRadius: "6px",
          zIndex: 1000,
        }}
      >
        <b>Pointorec</b> — Carte<br />
        <button onClick={() => navigate("/points")}>Voir la liste des points</button>
      </div>
    </div>
  );
};

export default MapPage;