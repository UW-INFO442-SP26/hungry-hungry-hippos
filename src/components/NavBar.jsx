import { useState } from "react";
import { NavLink } from "react-router";
import "./NavBar.css";
import hippoLogo from '../assets/logo.png';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">
      <img
        src={hippoLogo}
        alt="HippoTypes logo"
        className="logo-image"
      />
      <span>HippoTypes</span>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/practice">
            Practice
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
