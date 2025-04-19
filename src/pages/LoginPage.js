import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simule un login (remplace par une vraie vérification plus tard)
    navigate("/map");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Pointorec</h1>
      <p>Connecte-toi pour accéder à la carte.</p>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          type="email"
          required
          style={{ display: "block", marginBottom: 12 }}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          required
          style={{ display: "block", marginBottom: 12 }}
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default LoginPage;