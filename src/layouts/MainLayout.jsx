import { Navbar } from "../components/navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
