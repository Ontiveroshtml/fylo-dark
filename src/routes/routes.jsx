import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import { Features } from "../pages/Features";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Route>
    </Routes>
  );
}
