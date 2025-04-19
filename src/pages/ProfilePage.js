import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 24 }}>
      <h2>Profil</h2>
      <p>Modification des informations utilisateur (fonctionnalité à venir).</p>
      <button onClick={() => navigate("/map")}>Retour à la carte</button>
    </div>
  );
};

export default ProfilePage;