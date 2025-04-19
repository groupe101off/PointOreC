import React from "react";
import { useNavigate } from "react-router-dom";

const mockPoints = [
  { position: [48.8584, 2.2945], note: "Tour Eiffel" },
  { position: [48.853, 2.3499], note: "Notre-Dame" },
];

const PointsListPage = () => {
  const navigate = useNavigate();
  const points = mockPoints;

  return (
    <div style={{ padding: 24 }}>
      <h2>Liste des points</h2>
      <ul>
        {points.map((pt, idx) => (
          <li key={idx}>
            <b>{pt.note}</b>
            <br />
            {pt.position[0].toFixed(5)}, {pt.position[1].toFixed(5)}
            <br />
            <button style={{ marginRight: 8 }} onClick={() => navigate(`/point/${idx}`)}>
              Éditer
            </button>
            <button onClick={() => alert("Suppression non implémentée")}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/map")}>Retour à la carte</button>
    </div>
  );
};

export default PointsListPage;