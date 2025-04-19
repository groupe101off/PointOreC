import React from "react";
import { useNavigate } from "react-router-dom";

const ItineraryPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 24 }}>
      <h2>Itinéraire</h2>
      <p>Sélectionne des points pour calculer un itinéraire (fonctionnalité à venir).</p>
      <button onClick={() => navigate("/map")}>Retour à la carte</button>
    </div>
  );
};

export default ItineraryPage;