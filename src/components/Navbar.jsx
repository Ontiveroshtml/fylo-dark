import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-between p-12">
          <img src={logo} alt="Logo fylo" className="max-w-30" />

        <ul className="flex text-White gap-8">
          <Link to="#features">Features</Link>
          <Link to="#team">Team</Link>
          <Link to="#sign-in">Sign in</Link>
        </ul>
      </nav>
    </>
  );
}
