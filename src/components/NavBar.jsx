import { useState } from "react";
import { NavLink } from "react-router";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">MySite</div>

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
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
