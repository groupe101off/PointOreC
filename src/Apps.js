import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import PointsListPage from "./pages/PointsListPage";
import PointEditPage from "./pages/PointEditPage";
import ItineraryPage from "./pages/ItineraryPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/points" element={<PointsListPage />} />
      <Route path="/point/:id" element={<PointEditPage />} />
      <Route path="/itineraire" element={<ItineraryPage />} />
      <Route path="/profil" element={<ProfilePage />} />
    </Routes>
  </HashRouter>
);

export default App;