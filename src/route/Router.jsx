import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import ProfilePage from "../page/ProfilePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default Router;
