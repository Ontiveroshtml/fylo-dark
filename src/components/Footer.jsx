import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import emailIcon from "../assets/images/icon-email.svg";
import phoneIcon from "../assets/images/icon-phone.svg";

import { Contact } from "../pages/Contact";

export function Footer() {
  return (
    <footer className="w-full flex flex-col relative px-20 py-30 pt-50 gap-8 bg-Navy-950 z-2 ">
      <Contact />

      <img src={logo} alt="logo" className="max-w-30" />

      <div className="flex flex-col lg:flex-row gap-8  text-White justify-between">
        <div className="flex  text-White gap-4 max-w-85">
          <img
            src={locationIcon}
            alt="icon-location"
            className="max-w-30 h-5"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <img src={phoneIcon} alt="" className="max-w-5 h-5" />
            <span>+1-543-123-4567</span>
          </div>
          <div className="flex gap-4">
            <img src={emailIcon} alt="" className="max-w-5 h-5" />
            <span>example@fylo.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <a href="#">Face</a>
          <a href="#">X</a>
          <a href="#">Insta</a>
        </div>
      </div>
    </footer>
  );
}
