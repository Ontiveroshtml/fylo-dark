import { Features } from "../pages/Features";
import { Home } from "../pages/Home";
import { Team } from "../pages/Team";
import { Testimonials } from "../pages/Testimonials";

export function Landing() {
  return (
    <>
      <Home />
      <Features />
      <Team />
      <Testimonials />
    </>
  );
}
