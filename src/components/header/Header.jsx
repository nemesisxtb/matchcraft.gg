import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [mobileActive, setMobileActive] = useState(false);

  const toggleMobile = () => setMobileActive(!mobileActive);
  const closeMobile = () => setMobileActive(false);

  return (
    <header>
      <Link to="/" className="header--logo-link">
        <img src="logo.png" alt="MatchCraft Logo" className="header--logo" />
      </Link>

      <div className="header--menu">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/terms/" className={({ isActive }) => (isActive ? "active" : "")}>
          Terms of Service
        </NavLink>
        <NavLink to="/privacy/" className={({ isActive }) => (isActive ? "active" : "")}>
          Privacy Policy
        </NavLink>
      </div>

      <div className={`mobile-menu-btn ${mobileActive ? "active" : ""}`} onClick={toggleMobile}>
        <div className="line line-top"></div>
        <div className="line line-center"></div>
        <div className="line line-bottom"></div>
      </div>

      <nav className={`mobile-nav ${mobileActive ? "active" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={closeMobile}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/terms/" onClick={closeMobile}>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/privacy/" onClick={closeMobile}>
              Privacy Policy
            </Link>
          </li>
        </ul>

        <div className="mobile-socials">
          <a
            href="https://discord.com/users/938145514627694653"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a href="https://nemesisxtb.github.io/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </nav>
    </header>
  );
}
