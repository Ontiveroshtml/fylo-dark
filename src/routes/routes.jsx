import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

import { Features } from "../pages/Features";
import { Landing } from "../layouts/Landing";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/features" element={<Features />} />
      </Route>
    </Routes>
  );
}
