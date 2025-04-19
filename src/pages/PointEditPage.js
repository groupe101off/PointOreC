import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const mockPoints = [
  { position: [48.8584, 2.2945], note: "Tour Eiffel" },
  { position: [48.853, 2.3499], note: "Notre-Dame" },
];

const PointEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const point = mockPoints[id] || { note: "", position: [0, 0] };
  const [note, setNote] = useState(point.note);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Sauvegarde non implémentée (à relier au backend ou state)");
    navigate("/points");
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Éditer le point</h2>
      <form onSubmit={handleSave}>
        <label>
          Note :
          <input value={note} onChange={e => setNote(e.target.value)} style={{ marginLeft: 8 }} />
        </label>
        <br />
        <button type="submit" style={{ marginTop: 16 }}>
          Enregistrer
        </button>
      </form>
      <button style={{ marginTop: 16 }} onClick={() => navigate("/points")}>
        Annuler
      </button>
    </div>
  );
};

export default PointEditPage;